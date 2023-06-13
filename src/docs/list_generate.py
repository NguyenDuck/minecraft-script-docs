
from pathlib import Path
import os
from json import loads, dumps

root = Path(os.curdir)

for version in Path(root).iterdir():
    if (version.is_file()): continue
    ver_root = root.joinpath(version)
    modules = ver_root.joinpath("ScriptAPI/minecraft")
    dir_lists = []
    for module in modules.iterdir():
        for child in module.iterdir():
            dir_lists.append(child.relative_to(ver_root).as_posix())
    jsonObj = loads('''{"paths": []}''')
    jsonObj["paths"] = dir_lists

    f = open(ver_root.joinpath("list.json").as_posix(), "w")
    f.write(dumps(jsonObj))
    f.close()