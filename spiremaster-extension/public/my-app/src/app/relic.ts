export class Relic {
    constructor(public name: string, private _description: string, public counter?: number) {}

    public description: string = this._description.replace('%d', (this.counter || '').toString())
}
