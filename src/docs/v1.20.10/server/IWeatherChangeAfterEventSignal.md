---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IWeatherChangeAfterEventSignal Class
description: Contents of the @minecraft/server.IWeatherChangeAfterEventSignal class.
---
# IWeatherChangeAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IWeatherChangeAfterEventSignal
- [*WeatherChangeAfterEventSignal*](WeatherChangeAfterEventSignal.md)
- [*WeatherChangeAfterEventSignal*](WeatherChangeAfterEventSignal.md)

An event that fires after the weather has changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*WeatherChangeAfterEvent*](WeatherChangeAfterEvent.md)) => *void*

#### **Returns** (arg: [*WeatherChangeAfterEvent*](WeatherChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*WeatherChangeAfterEvent*](WeatherChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
