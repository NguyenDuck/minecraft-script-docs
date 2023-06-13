---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockBreakEvent Class
description: Contents of the @minecraft/server.BlockBreakEvent class.
---
# BlockBreakEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event where a player breaks a block.

## Properties

### **brokenBlockPermutation**
`read-only brokenBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was broken.

Type: [*BlockPermutation*](BlockPermutation.md)

### **player**
`read-only player: Player;`

Player that broke the block for this event.

Type: [*Player*](Player.md)
