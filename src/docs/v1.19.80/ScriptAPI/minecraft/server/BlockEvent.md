---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockEvent Class
description: Contents of the @minecraft/server.BlockEvent class.
---
# BlockEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend BlockEvent
- [*BeforePistonActivateEvent*](BeforePistonActivateEvent.md)
- [*BlockBreakEvent*](BlockBreakEvent.md)
- [*BlockExplodeEvent*](BlockExplodeEvent.md)
- [*BlockPlaceEvent*](BlockPlaceEvent.md)
- [*ButtonPushEvent*](ButtonPushEvent.md)
- [*LeverActionEvent*](LeverActionEvent.md)
- [*PistonActivateEvent*](PistonActivateEvent.md)

Contains information regarding an event that impacts a specific block.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)
