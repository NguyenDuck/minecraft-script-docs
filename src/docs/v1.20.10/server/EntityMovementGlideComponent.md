---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityMovementGlideComponent Class
description: Contents of the @minecraft/server.EntityMovementGlideComponent class.
---
# EntityMovementGlideComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this movement control allows the mob to glide.

## Properties

### **speedWhenTurning**
`read-only speedWhenTurning: number;`

Speed in effect when the entity is turning.

Type: *number*

### **startSpeed**
`read-only startSpeed: number;`

Start speed during a glide.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.glide";`

Type: *string*
