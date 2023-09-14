---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ExplosionEventSignal Class
description: Contents of the @minecraft/server.ExplosionEventSignal class.
---
# ExplosionEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to when an explosion occurs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void
`

Adds a callback that will be called when an explosion occurs.

#### **Parameters**
- **callback**: (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*

#### **Returns** (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ExplosionEvent) => void): void
`

Removes a callback from being called when an explosion occurs.

#### **Parameters**
- **callback**: (arg: [*ExplosionEvent*](ExplosionEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
