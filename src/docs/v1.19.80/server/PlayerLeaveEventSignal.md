---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerLeaveEventSignal Class
description: Contents of the @minecraft/server.PlayerLeaveEventSignal class.
---
# PlayerLeaveEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to a player leaving the world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void
`

Adds a callback that will be called when a player leaves the world.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveEvent*](PlayerLeaveEvent.md)) => *void*

#### **Returns** (arg: [*PlayerLeaveEvent*](PlayerLeaveEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void
`

Removes a callback from being called when a player leaves the world.

#### **Parameters**
- **callback**: (arg: [*PlayerLeaveEvent*](PlayerLeaveEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
