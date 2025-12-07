/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 98.3476,
        y: 98.3476,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.clear();
    this.size = 100;
    this.goto(0, 0);
    this.direction = 90;
    while (!(this.size === 3)) {
      this.direction += 1;
      this.effects.color += 2;
      this.size -= 1;
      this.createClone();
      yield;
    }
  }
}
