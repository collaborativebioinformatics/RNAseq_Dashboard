export class Range {

  /**
  * Chromosome range.
  * @public
  * @class
  * @param {Object} data - range data.
  * @param {Integer} data.chr - chromosome index.
  * @param {Integer[]} [data.ploidy] - array which controls on which chromosomes range should appear in case of ploidy.
  * @param {Integer} data.start - range start.
  * @param {Integer} data.stop - range end.
  * @param {String} data.color - range color.
  */
  constructor(data) {
    this._data = data;
    this.start = data.start;
    this.stop = data.stop;
    this.length = this.stop - this.start;
  }

  getColor(chrIndex) {
    if (!('ploidy' in this._data)) {
      return this._getColor(chrIndex);
    } else if ('ploidy' in this._data && this._data.ploidy[chrIndex]) {
      return this._getColor(chrIndex);
    } else {
      return 'transparent';
    }
  }

  _getColor(chrIndex) {
    if (Array.isArray(this._data.color)) {
      return this._data.color[chrIndex];
    } else {
      return this._data.color;
    }
  }

}
