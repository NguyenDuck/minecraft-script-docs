window.onload = () => {
  // Logo Text
  let logo = document.getElementById("logo_text");
  logo.innerHTML = window.location.hostname;
  logo.onclick = () => (window.location = "");

  // Dropdown Arrow Loading
  let canvasElements = document.getElementsByClassName("dropdown_arrow");

  const leftWhiteArrow = new Image();
  leftWhiteArrow.src = "static/arrow_left_white.png";

  leftWhiteArrow.onload = () => {
    for (let c of canvasElements) {
      loadDropdownArrowToCanvas(c);
    }
  };

  function loadDropdownArrowToCanvas(c) {
    if (!leftWhiteArrow.complete) return;
    let ctx = c.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      leftWhiteArrow,
      0,
      0,
      leftWhiteArrow.width * (c.height / leftWhiteArrow.height),
      leftWhiteArrow.height * (c.height / leftWhiteArrow.height)
    );
  }

  // Version Dropdown Setup
  function getVersion() {
    fetch("version.json").then((v) => {
      let jsonObject = v.text().then((text) => JSON.parse(text));
      jsonObject.then((o) => {
        let versions = Object.getOwnPropertyNames(o.versions);
        document.getElementById("current_version").innerHTML = o.latest.release;
        addVersion(o.latest.preview).setAttribute(
          "hash",
          "repo_sync_working_branch"
        );
        versions.forEach((b) =>
          addVersion(b).setAttribute(
            "hash",
            b == o.latest.release ? "main" : o.versions[b]
          )
        );

        highlight();
      });
    });
  }

  function addVersion(version) {
    let item = document.createElement("li");
    item.innerHTML = version;
    document.getElementById("version_list").appendChild(item);
    return item;
  }

  function highlight() {
    let current_version = document.getElementById("current_version");
    let version_list = document.getElementById("version_list");
    let current_selected;
    version_list.childNodes.forEach((v) => {
      if (v.innerHTML == current_version.innerHTML) {
        v.setAttribute("selected", true);
        current_version.setAttribute("hash", v.getAttribute("hash"));
        current_selected = v;
      } else {
        v.onclick = () => {
          current_selected.removeAttribute("selected");
          current_version.innerHTML = v.innerHTML;
          highlight();
          syncCurrentDocs();
        };
      }
    });

    let r = fetch(`docs/v${current_version.innerHTML}/list.json`);
    r.then((v) => {
      v.text().then((t) => {
        let element = document.getElementById("tree");
        try {
          element.lastChild.remove();
        } catch {}
        let jsonObject;
        try {
          jsonObject = JSON.parse(t);
        } catch (e) {
          jsonObject = null;
        }
        if (!jsonObject) return;
        let sorted = jsonObject.paths.sort((a, b) => {
          a = a.split("/")[3];
          b = b.split("/")[3];
          let firstCharA = a.charAt(0);
          let firstCharB = b.charAt(0);
          let isLowerCaseA = firstCharA.toLowerCase() === firstCharA;
          let isLowerCaseB = firstCharB.toLowerCase() === firstCharB;
          if (isLowerCaseA && !isLowerCaseB) {
            return -1;
          } else if (!isLowerCaseA && isLowerCaseB) {
            return 1;
          } else {
            return a.localeCompare(b);
          }
        });
        for (let path of sorted) {
          let splited = path.split("/");
          for (let i = 0; i < splited.length; i++) {
            let folder_name = splited[i];

            if (i == splited.length - 1) {
              folder_name = folder_name.replace(".md", "");
            }

            if (document.getElementById("__docs__" + folder_name)) {
              element = document.getElementById(
                "__docs__" + folder_name + "__items"
              );
              continue;
            }

            if (i == splited.length - 1) {
              let item = createUlItem(folder_name);
              item.setAttribute("title", folder_name);
              item.onclick = () => {
                let content = document.getElementById("content")
                fetch(`docs/v${current_version.innerHTML}/${path}`).then((v) => {
                  v.text().then(t => {
                    try {
                      content.innerHTML = marked.parse(filter(t));
                    } catch (err) {
                      console.error(err)
                    }
                    content.setAttribute("url_data", path)
                  })
                });
              };
              element.appendChild(item);
            } else {
              let folder = createUlFolder(folder_name);
              folder.parent.classList.add("order_" + i);
              element.appendChild(folder.parent);
              element = folder.child;
            }
          }
        }
        reloadToggle();
      });
    })
  }
  getVersion();

  // Docs Filter
  function filter(t) {
    return t.replace(/---[\s\S]*?---/g, "").replace(/## Change Log[\s\S]*/g, "")
  }

  // Sync Docs Version Content
  function syncCurrentDocs() {
    let current_version = document.getElementById("current_version")
    let content = document.getElementById("content")
    let data = content.getAttribute("url_data")
    if (!data) return
    fetch(`docs/v${current_version.innerHTML}/${data}`).then((v) => {
      v.text().then(t => {
        content.innerHTML = marked.parse(filter(t));
      })
    });
  }

  // Settup Dropdown Toggle

  function reloadToggle() {
    for (let e of document.getElementsByClassName("ul_title")) {
      e.onclick = () => {
        e.parentElement.setAttribute(
          "opened",
          !e.parentElement.getAttribute("opened")?.includes("true")
        );
      };
    }
  }

  reloadToggle();

  function createUlFolder(name) {
    let e = document.createElement("ul");
    e.classList.add("folder");
    e.setAttribute("id", "__docs__" + name);
    let li = document.createElement("li");
    li.classList.add("ul_title");
    let c = document.getElementById("global_dropdown_arrow").cloneNode();
    c.removeAttribute("id");
    loadDropdownArrowToCanvas(c);
    li.appendChild(c);
    let span = document.createElement("span");
    span.innerHTML = name;
    li.appendChild(span);
    e.appendChild(li);
    li = document.createElement("li");
    li.classList.add("ul_item");
    li.setAttribute("id", "__docs__" + name + "__items");
    e.appendChild(li);
    return { parent: e, child: li };
  }

  function createUlItem(name) {
    let e = document.createElement("ul");
    e.innerHTML = name;
    return e;
  }
};
