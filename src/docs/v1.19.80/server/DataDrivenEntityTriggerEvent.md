---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.DataDrivenEntityTriggerEvent Class
description: Contents of the @minecraft/server.DataDrivenEntityTriggerEvent class.
---
# DataDrivenEntityTriggerEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Properties

### **entity**
`read-only entity: Entity;`

Entity that the event triggered on.

Type: [*Entity*](Entity.md)

### **id**
`read-only id: string;`

Name of the data driven event being triggered.

Type: *string*

## Methods
- [getModifiers](#getmodifiers)

### **getModifiers**
`
getModifiers(): DefinitionModifier[]
`

A list of modifications to component state that are the effect of this triggered event.

#### **Returns** [*DefinitionModifier*](DefinitionModifier.md)[]
