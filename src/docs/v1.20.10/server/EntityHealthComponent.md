---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityHealthComponent Class
description: Contents of the @minecraft/server.EntityHealthComponent class.
---
# EntityHealthComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityAttributeComponent*](EntityAttributeComponent.md)

Defines the health properties of an entity.

## Constants

### **componentId**
`static read-only componentId = "minecraft:health";`

Type: *string*

#### Examples
##### ***applyDamageThenHeal.ts***
```typescript
  const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);

  skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton

  mc.system.runTimeout(() => {
    let health = skelly.getComponent("health") as mc.EntityHealthComponent;
    log("Skeleton health before heal: " + health.currentValue);
    health.resetToMaxValue();
    log("Skeleton health after heal: " + health.currentValue);
  }, 20);
```
