---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemFoodComponent Class
description: Contents of the @minecraft/server.ItemFoodComponent class.
---
# ItemFoodComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item is consumable by entities. Note that this component only applies to data-driven items.

## Properties

### **canAlwaysEat**
`read-only canAlwaysEat: boolean;`

If true, the player can always eat this item (even when not hungry).

Type: *boolean*

### **nutrition**
`read-only nutrition: number;`

Represents how much nutrition this food item will give an entity when eaten.

Type: *number*

### **saturationModifier**
`read-only saturationModifier: number;`

When an item is eaten, this value is used according to this formula (nutrition * saturation_modifier * 2) to apply a saturation buff.

Type: *number*

### **usingConvertsTo**
`read-only usingConvertsTo: string;`

When specified, converts the active item to the one specified by this property.

Type: *string*

## Constants

### **componentId**
`static read-only componentId = "minecraft:food";`

Type: *string*
