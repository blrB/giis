if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'giis-lab'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'giis-lab'.");
}
this['giis-lab'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  TransposedMatrix.prototype = Object.create(AbstractMatrix.prototype);
  TransposedMatrix.prototype.constructor = TransposedMatrix;
  TransposedMutableMatrix.prototype = Object.create(TransposedMatrix.prototype);
  TransposedMutableMatrix.prototype.constructor = TransposedMutableMatrix;
  ListMatrix.prototype = Object.create(AbstractMatrix.prototype);
  ListMatrix.prototype.constructor = ListMatrix;
  MutableListMatrix.prototype = Object.create(ListMatrix.prototype);
  MutableListMatrix.prototype.constructor = MutableListMatrix;
  function Matrix() {
  }
  Matrix.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Matrix',
    interfaces: []
  };
  function get_size($receiver) {
    return Kotlin.imul($receiver.cols, $receiver.rows);
  }
  function MutableMatrix() {
  }
  MutableMatrix.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MutableMatrix',
    interfaces: [Matrix]
  };
  function AbstractMatrix() {
  }
  AbstractMatrix.prototype.toString = function () {
    var sb = new StringBuilder();
    sb.append_s8itvh$(91);
    var tmp$, tmp$_0;
    tmp$ = this.rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = this.cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        var value = this.get_vux9f0$(x, y);
        if (x === 0)
          sb.append_s8itvh$(91);
        sb.append_gw00v9$(Kotlin.toString(value));
        if (x === (this.cols - 1 | 0)) {
          sb.append_s8itvh$(93);
          if (y < (this.rows - 1 | 0))
            sb.append_gw00v9$(', ');
        }
         else {
          sb.append_gw00v9$(', ');
        }
      }
    }
    sb.append_s8itvh$(93);
    return sb.toString();
  };
  AbstractMatrix.prototype.equals = function (other) {
    if (!Kotlin.isType(other, Matrix))
      return false;
    if (this.rows !== other.rows || this.cols !== other.cols)
      return false;
    var eq = {v: true};
    var tmp$, tmp$_0;
    tmp$ = this.rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = this.cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        var value = this.get_vux9f0$(x, y);
        if (value === null) {
          if (other.get_vux9f0$(x, y) !== null) {
            eq.v = false;
          }
        }
         else {
          if (!Kotlin.equals(value, other.get_vux9f0$(x, y))) {
            eq.v = false;
          }
        }
      }
    }
    return eq.v;
  };
  AbstractMatrix.prototype.hashCode = function () {
    var h = {v: 17};
    h.v = (h.v * 39 | 0) + this.cols | 0;
    h.v = (h.v * 39 | 0) + this.rows | 0;
    var tmp$, tmp$_0;
    tmp$ = this.rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = this.cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        var it = this.get_vux9f0$(x, y);
        var tmp$_1;
        h.v = (h.v * 37 | 0) + ((tmp$_1 = it != null ? Kotlin.hashCode(it) : null) != null ? tmp$_1 : 1) | 0;
      }
    }
    return h.v;
  };
  AbstractMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbstractMatrix',
    interfaces: [Matrix]
  };
  function TransposedMatrix(original) {
    AbstractMatrix.call(this);
    this.original_0 = original;
  }
  Object.defineProperty(TransposedMatrix.prototype, 'cols', {
    get: function () {
      return this.original_0.rows;
    }
  });
  Object.defineProperty(TransposedMatrix.prototype, 'rows', {
    get: function () {
      return this.original_0.cols;
    }
  });
  TransposedMatrix.prototype.get_vux9f0$ = function (x, y) {
    return this.original_0.get_vux9f0$(y, x);
  };
  TransposedMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TransposedMatrix',
    interfaces: [AbstractMatrix]
  };
  function TransposedMutableMatrix(original) {
    TransposedMatrix.call(this, original);
  }
  TransposedMutableMatrix.prototype.set_vq7693$ = function (x, y, value) {
    var tmp$;
    (Kotlin.isType(tmp$ = this.original_0, MutableMatrix) ? tmp$ : Kotlin.throwCCE()).set_vq7693$(y, x, value);
  };
  TransposedMutableMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TransposedMutableMatrix',
    interfaces: [MutableMatrix, TransposedMatrix]
  };
  function asTransposed($receiver) {
    return new TransposedMatrix($receiver);
  }
  function asTransposed_0($receiver) {
    return new TransposedMutableMatrix($receiver);
  }
  function ListMatrix(cols, rows, list) {
    AbstractMatrix.call(this);
    this.cols_dx86ic$_0 = cols;
    this.rows_dx86ic$_0 = rows;
    this.list_0 = list;
  }
  Object.defineProperty(ListMatrix.prototype, 'cols', {
    get: function () {
      return this.cols_dx86ic$_0;
    }
  });
  Object.defineProperty(ListMatrix.prototype, 'rows', {
    get: function () {
      return this.rows_dx86ic$_0;
    }
  });
  ListMatrix.prototype.get_vux9f0$ = function (x, y) {
    return this.list_0.get_za3lpa$(Kotlin.imul(y, this.cols) + x | 0);
  };
  ListMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ListMatrix',
    interfaces: [AbstractMatrix]
  };
  function MutableListMatrix(cols, rows, list) {
    ListMatrix.call(this, cols, rows, list);
  }
  MutableListMatrix.prototype.set_vq7693$ = function (x, y, value) {
    var tmp$;
    (Kotlin.isType(tmp$ = this.list_0, MutableList) ? tmp$ : Kotlin.throwCCE()).set_wxm5ur$(Kotlin.imul(y, this.cols) + x | 0, value);
  };
  MutableListMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MutableListMatrix',
    interfaces: [MutableMatrix, ListMatrix]
  };
  function matrixOf(cols, rows, elements) {
    return new ListMatrix(cols, rows, asList(elements));
  }
  function mutableMatrixOf(cols, rows, elements) {
    return new MutableListMatrix(cols, rows, toMutableList(elements));
  }
  function prepareListForMatrix(cols, rows, init) {
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(init(x, y));
      }
    }
    return list;
  }
  var createMatrix = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.createMatrix_6qkxfg$', function (cols, rows, init) {
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(init(x, y));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  });
  var createMutableMatrix = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.createMutableMatrix_6qkxfg$', function (cols, rows, init) {
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(init(x, y));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.MutableListMatrix(cols, rows, list);
  });
  function mapIndexed$lambda(closure$transform, this$mapIndexed) {
    return function (x, y) {
      return closure$transform(x, y, this$mapIndexed.get_vux9f0$(x, y));
    };
  }
  var mapIndexed = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.mapIndexed_hacaqk$', function ($receiver, transform) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(transform(x, y, $receiver.get_vux9f0$(x, y)));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  });
  function map$lambda(closure$transform) {
    return function (x, y, value) {
      return closure$transform(value);
    };
  }
  var map = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.map_taft24$', function ($receiver, transform) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(transform($receiver.get_vux9f0$(x, y)));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  });
  var forEachIndexed = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.forEachIndexed_x3un2v$', function ($receiver, action) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = $receiver.cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        action(x, y, $receiver.get_vux9f0$(x, y));
      }
    }
  });
  function forEach$lambda(closure$action) {
    return function (x, y, value) {
      closure$action(value);
    };
  }
  var forEach = Kotlin.defineInlineFunction('giis-lab.com.ichipsea.kotlin.matrix.forEach_akez33$', function ($receiver, action) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = $receiver.cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        action($receiver.get_vux9f0$(x, y));
      }
    }
  });
  function toList($receiver) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$($receiver.get_vux9f0$(x, y));
      }
    }
    return list;
  }
  function toMutableList_0($receiver) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$($receiver.get_vux9f0$(x, y));
      }
    }
    return list;
  }
  function toArrayList($receiver, size) {
    var tmp$;
    var list = ArrayList_init(size);
    var itr = $receiver.iterator();
    tmp$ = size - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      if (itr.hasNext()) {
        list.add_11rb$(itr.next());
      }
       else {
        throw new IllegalArgumentException('No enough elements');
      }
    }
    return list;
  }
  function toMatrix($receiver, cols, rows) {
    var list = toArrayList($receiver, Kotlin.imul(cols, rows));
    return new ListMatrix(cols, rows, list);
  }
  function toMutableMatrix($receiver, cols, rows) {
    var list = toArrayList($receiver, Kotlin.imul(cols, rows));
    return new MutableListMatrix(cols, rows, list);
  }
  function plus($receiver, other) {
    if ($receiver.rows !== other.rows || $receiver.cols !== other.cols)
      throw new IllegalArgumentException('Matrices not match');
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(Kotlin.numberToDouble($receiver.get_vux9f0$(x, y)) + Kotlin.numberToDouble(other.get_vux9f0$(x, y)));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  }
  function unaryMinus($receiver) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(-Kotlin.numberToDouble($receiver.get_vux9f0$(x, y)));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  }
  function minus($receiver, other) {
    return plus($receiver, unaryMinus(other));
  }
  function times($receiver, other) {
    if ($receiver.rows !== other.rows || $receiver.cols !== other.cols)
      throw new IllegalArgumentException('Matrices not match');
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(Kotlin.numberToDouble($receiver.get_vux9f0$(x, y)) * Kotlin.numberToDouble(other.get_vux9f0$(x, y)));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  }
  function times_0($receiver, other) {
    var cols = $receiver.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        list.add_11rb$(Kotlin.numberToDouble($receiver.get_vux9f0$(x, y)) * Kotlin.numberToDouble(other));
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  }
  function times_1($receiver, other) {
    return times_0(other, $receiver);
  }
  function x($receiver, other) {
    if (other.rows !== $receiver.cols)
      throw new IllegalArgumentException('Matrices not match');
    var cols = other.cols;
    var rows = $receiver.rows;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, rows));
    tmp$ = rows - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x = 0; x <= tmp$_0; x++) {
        var tmp$_1;
        var value = 0.0;
        tmp$_1 = other.rows - 1 | 0;
        for (var i = 0; i <= tmp$_1; i++)
          value += Kotlin.numberToDouble(other.get_vux9f0$(x, i)) * Kotlin.numberToDouble($receiver.get_vux9f0$(i, y));
        list.add_11rb$(value);
      }
    }
    return new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, rows, list);
  }
  function Array4D(x, y, z, a, array) {
    Array4D$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = a;
    this.array = array;
  }
  function Array4D$Companion() {
    Array4D$Companion_instance = this;
  }
  function Array4D$Companion$invoke$lambda$lambda$lambda(it) {
    return [];
  }
  function Array4D$Companion$invoke$lambda$lambda(it) {
    var array = Array(0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = [];
    }
    return array;
  }
  function Array4D$Companion$invoke$lambda(it) {
    var array = Array(0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array(0);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = [];
      }
      array[i] = array_0;
    }
    return array;
  }
  Array4D$Companion.prototype.invoke_287e2$ = Kotlin.defineInlineFunction('giis-lab.giis.Array4D.Companion.invoke_287e2$', function (T_0, isT) {
    var array = Array(0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array(0);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var array_1 = Array(0);
        var tmp$_1;
        tmp$_1 = array_1.length - 1 | 0;
        for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
          array_1[i_1] = [];
        }
        array_0[i_0] = array_1;
      }
      array[i] = array_0;
    }
    return new _.giis.Array4D(0, 0, 0, 0, array);
  });
  function Array4D$Companion$invoke$lambda$lambda$lambda_0(closure$a) {
    return function (it) {
      return Kotlin.newArray(closure$a, null);
    };
  }
  function Array4D$Companion$invoke$lambda$lambda_0(closure$z, closure$a) {
    return function (it) {
      var size = closure$z;
      var array = Array(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = Kotlin.newArray(closure$a, null);
      }
      return array;
    };
  }
  function Array4D$Companion$invoke$lambda_0(closure$y, closure$z, closure$a) {
    return function (it) {
      var size = closure$y;
      var array = Array(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var closure$z_0 = closure$z;
        var closure$a_0 = closure$a;
        var array_0 = Array(closure$z_0);
        var tmp$_0;
        tmp$_0 = array_0.length - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
          array_0[i_0] = Kotlin.newArray(closure$a_0, null);
        }
        array[i] = array_0;
      }
      return array;
    };
  }
  Array4D$Companion.prototype.invoke_6hd7xm$ = Kotlin.defineInlineFunction('giis-lab.giis.Array4D.Companion.invoke_6hd7xm$', function (T_0, isT, x, y, z, a) {
    var array = Array(x);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array(y);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var array_1 = Array(z);
        var tmp$_1;
        tmp$_1 = array_1.length - 1 | 0;
        for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
          array_1[i_1] = Kotlin.newArray(a, null);
        }
        array_0[i_0] = array_1;
      }
      array[i] = array_0;
    }
    return new _.giis.Array4D(x, y, z, a, array);
  });
  Array4D$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array4D$Companion_instance = null;
  function Array4D$Companion_getInstance() {
    if (Array4D$Companion_instance === null) {
      new Array4D$Companion();
    }
    return Array4D$Companion_instance;
  }
  Array4D.prototype.get_tjonv8$ = function (x, y, z, a) {
    return this.array[x][y][z][a];
  };
  Array4D.prototype.set_6isa55$ = function (x, y, z, a, t) {
    if (x >= 0 && y >= 0 && z >= 0 && a >= 0 && x < this.x && y < this.y && z < this.z && a < this.a) {
      this.array[x][y][z][a] = t;
    }
  };
  function Array4D$forEach$lambda$lambda$lambda$lambda(closure$operation) {
    return function (it) {
      closure$operation(it);
    };
  }
  function Array4D$forEach$lambda$lambda$lambda(closure$operation) {
    return function (it) {
      var tmp$;
      for (tmp$ = 0; tmp$ !== it.length; ++tmp$) {
        var element = it[tmp$];
        closure$operation(element);
      }
    };
  }
  function Array4D$forEach$lambda$lambda(closure$operation) {
    return function (it) {
      var tmp$;
      for (tmp$ = 0; tmp$ !== it.length; ++tmp$) {
        var element = it[tmp$];
        var closure$operation_0 = closure$operation;
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
          var element_0 = element[tmp$_0];
          closure$operation_0(element_0);
        }
      }
    };
  }
  function Array4D$forEach$lambda(closure$operation) {
    return function (it) {
      var tmp$;
      for (tmp$ = 0; tmp$ !== it.length; ++tmp$) {
        var element = it[tmp$];
        var closure$operation_0 = closure$operation;
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
          var element_0 = element[tmp$_0];
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== element_0.length; ++tmp$_1) {
            var element_1 = element_0[tmp$_1];
            closure$operation_0(element_1);
          }
        }
      }
    };
  }
  Array4D.prototype.forEach_qlkmfe$ = Kotlin.defineInlineFunction('giis-lab.giis.Array4D.forEach_qlkmfe$', function (operation) {
    var $receiver = this.array;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== element_0.length; ++tmp$_1) {
          var element_1 = element_0[tmp$_1];
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== element_1.length; ++tmp$_2) {
            var element_2 = element_1[tmp$_2];
            operation(element_2);
          }
        }
      }
    }
  });
  function Array4D$forEachIndexed$lambda$lambda$lambda$lambda(closure$operation, closure$x, closure$y, closure$z) {
    return function (a, ai) {
      closure$operation(closure$x, closure$y, closure$z, a, ai);
    };
  }
  function Array4D$forEachIndexed$lambda$lambda$lambda(closure$operation, closure$x, closure$y) {
    return function (z, zi) {
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== zi.length; ++tmp$) {
        var item = zi[tmp$];
        closure$operation(closure$x, closure$y, z, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item);
      }
    };
  }
  function Array4D$forEachIndexed$lambda$lambda(closure$operation, closure$x) {
    return function (y, yi) {
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== yi.length; ++tmp$) {
        var item = yi[tmp$];
        var closure$operation_0 = closure$operation;
        var closure$x_0 = closure$x;
        var z = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
        var tmp$_1, tmp$_0_0;
        var index_0 = 0;
        for (tmp$_1 = 0; tmp$_1 !== item.length; ++tmp$_1) {
          var item_0 = item[tmp$_1];
          closure$operation_0(closure$x_0, y, z, (tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0), item_0);
        }
      }
    };
  }
  function Array4D$forEachIndexed$lambda(closure$operation) {
    return function (x, xi) {
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== xi.length; ++tmp$) {
        var item = xi[tmp$];
        var closure$operation_0 = closure$operation;
        var y = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
        var tmp$_1, tmp$_0_0;
        var index_0 = 0;
        for (tmp$_1 = 0; tmp$_1 !== item.length; ++tmp$_1) {
          var item_0 = item[tmp$_1];
          var z = (tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0);
          var tmp$_2, tmp$_0_1;
          var index_1 = 0;
          for (tmp$_2 = 0; tmp$_2 !== item_0.length; ++tmp$_2) {
            var item_1 = item_0[tmp$_2];
            closure$operation_0(x, y, z, (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1), item_1);
          }
        }
      }
    };
  }
  Array4D.prototype.forEachIndexed_3fnaqi$ = Kotlin.defineInlineFunction('giis-lab.giis.Array4D.forEachIndexed_3fnaqi$', function (operation) {
    var $receiver = this.array;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var x = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var tmp$_1, tmp$_0_0;
      var index_0 = 0;
      for (tmp$_1 = 0; tmp$_1 !== item.length; ++tmp$_1) {
        var item_0 = item[tmp$_1];
        var y = (tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0);
        var tmp$_2, tmp$_0_1;
        var index_1 = 0;
        for (tmp$_2 = 0; tmp$_2 !== item_0.length; ++tmp$_2) {
          var item_1 = item_0[tmp$_2];
          var z = (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1);
          var tmp$_3, tmp$_0_2;
          var index_2 = 0;
          for (tmp$_3 = 0; tmp$_3 !== item_1.length; ++tmp$_3) {
            var item_2 = item_1[tmp$_3];
            operation(x, y, z, (tmp$_0_2 = index_2, index_2 = tmp$_0_2 + 1 | 0, tmp$_0_2), item_2);
          }
        }
      }
    }
  });
  Array4D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Array4D',
    interfaces: []
  };
  function Scene() {
    Scene_instance = this;
    this.scale = 8.0;
    this.size = 75;
    var x = this.size;
    var y = this.size;
    var array = Array(x);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array(y);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var array_1 = Array(1);
        var tmp$_1;
        tmp$_1 = array_1.length - 1 | 0;
        for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
          array_1[i_1] = Kotlin.newArray(1, null);
        }
        array_0[i_0] = array_1;
      }
      array[i] = array_0;
    }
    this.array = new _.giis.Array4D(x, y, 1, 1, array);
  }
  Scene.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Scene',
    interfaces: []
  };
  var Scene_instance = null;
  function Scene_getInstance() {
    if (Scene_instance === null) {
      new Scene();
    }
    return Scene_instance;
  }
  function main$lambda(it) {
    init();
    initLab1();
    initLab2();
    initLab3();
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function changeScale(link, canvas, context) {
    Scene_getInstance().scale = toDouble(link.innerText);
    canvas.width = Scene_getInstance().size * Scene_getInstance().scale | 0;
    canvas.height = Scene_getInstance().size * Scene_getInstance().scale | 0;
    context.scale(Scene_getInstance().scale, Scene_getInstance().scale);
    render(context);
  }
  function init$lambda(closure$context) {
    return function (it) {
      var tmp$ = Scene_getInstance();
      var x = Scene_getInstance().size;
      var y = Scene_getInstance().size;
      var array = Array(x);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        var array_0 = Array(y);
        var tmp$_1;
        tmp$_1 = array_0.length - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
          var array_1 = Array(1);
          var tmp$_2;
          tmp$_2 = array_1.length - 1 | 0;
          for (var i_1 = 0; i_1 <= tmp$_2; i_1++) {
            array_1[i_1] = Kotlin.newArray(1, null);
          }
          array_0[i_0] = array_1;
        }
        array[i] = array_0;
      }
      tmp$.array = new _.giis.Array4D(x, y, 1, 1, array);
      closure$context.clearRect(0.0, 0.0, Scene_getInstance().size, Scene_getInstance().size);
    };
  }
  function init$lambda_0(closure$buttonScale1, closure$canvas, closure$context) {
    return function (it) {
      changeScale(closure$buttonScale1, closure$canvas, closure$context);
    };
  }
  function init$lambda_1(closure$buttonScale2, closure$canvas, closure$context) {
    return function (it) {
      changeScale(closure$buttonScale2, closure$canvas, closure$context);
    };
  }
  function init$lambda_2(closure$buttonScale4, closure$canvas, closure$context) {
    return function (it) {
      changeScale(closure$buttonScale4, closure$canvas, closure$context);
    };
  }
  function init$lambda_3(closure$buttonScale8, closure$canvas, closure$context) {
    return function (it) {
      changeScale(closure$buttonScale8, closure$canvas, closure$context);
    };
  }
  function init() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    canvas.width = Scene_getInstance().size * Scene_getInstance().scale | 0;
    canvas.height = Scene_getInstance().size * Scene_getInstance().scale | 0;
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    context.scale(Scene_getInstance().scale, Scene_getInstance().scale);
    var buttonClean = Kotlin.isType(tmp$_1 = document.getElementById('clean'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonClean.onclick = init$lambda(context);
    var buttonScale1 = Kotlin.isType(tmp$_2 = document.getElementById('scale-1'), HTMLElement) ? tmp$_2 : Kotlin.throwCCE();
    buttonScale1.onclick = init$lambda_0(buttonScale1, canvas, context);
    var buttonScale2 = Kotlin.isType(tmp$_3 = document.getElementById('scale-2'), HTMLElement) ? tmp$_3 : Kotlin.throwCCE();
    buttonScale2.onclick = init$lambda_1(buttonScale2, canvas, context);
    var buttonScale4 = Kotlin.isType(tmp$_4 = document.getElementById('scale-4'), HTMLElement) ? tmp$_4 : Kotlin.throwCCE();
    buttonScale4.onclick = init$lambda_2(buttonScale4, canvas, context);
    var buttonScale8 = Kotlin.isType(tmp$_5 = document.getElementById('scale-8'), HTMLElement) ? tmp$_5 : Kotlin.throwCCE();
    buttonScale8.onclick = init$lambda_3(buttonScale8, canvas, context);
  }
  function initLab1$lambda(it) {
    drawLine('canvas', Kotlin.getCallableRef('drawDDA', function (source, target, canvas) {
      return drawDDA(source, target, canvas);
    }));
  }
  function initLab1$lambda_0(it) {
    drawLine('canvas', Kotlin.getCallableRef('drawBresenham', function (source, target, canvas) {
      return drawBresenham(source, target, canvas);
    }));
  }
  function initLab1$lambda_1(it) {
    drawLine('canvas', Kotlin.getCallableRef('drawWu', function (source, target, canvas) {
      return drawWu(source, target, canvas);
    }));
  }
  function initLab1() {
    var tmp$, tmp$_0, tmp$_1;
    console.log('Init lab 1');
    var buttonDDA = Kotlin.isType(tmp$ = document.getElementById('dda'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonDDA.onclick = initLab1$lambda;
    console.log('Init buttonDDA');
    var buttonBresenham = Kotlin.isType(tmp$_0 = document.getElementById('bresenham'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonBresenham.onclick = initLab1$lambda_0;
    console.log('Init buttonBresenham');
    var buttonWu = Kotlin.isType(tmp$_1 = document.getElementById('wu'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonWu.onclick = initLab1$lambda_1;
    console.log('Init buttonWu');
  }
  function waitDrawDDA(context, i, x, y) {
    drawPixel(context, Kotlin.numberToInt(x), Kotlin.numberToInt(y));
    console.log('Step ' + i + ': x:' + x + '; y:' + y + ', Plot(' + Kotlin.numberToInt(x) + ',' + Kotlin.numberToInt(y) + ')');
  }
  function waitDrawBresenham(context, i, x, y, eOld, e) {
    drawPixel(context, x, y);
    console.log('Step ' + i + ': e:' + eOld + ', x:' + x + '; y:' + y + ", e':" + e + ' Plot(' + x + ',' + y + ')');
  }
  function waitDrawWu(context, i, x, y, e, changeX, changeY) {
    drawPixel(context, x, y);
    var a = Math.abs(e);
    if (e < 0) {
      drawAlfaPixel(context, a, x - changeX | 0, y - changeY | 0);
    }
     else {
      drawAlfaPixel(context, a, x + changeX | 0, y + changeY | 0);
    }
    console.log('Step ' + i + ': e:' + e + ', x:' + x + '; y:' + y + ', a:' + a + ' Plot(' + x + ',' + y + ')');
  }
  function drawLine$lambda(closure$canvas, closure$points, closure$drawAlgorithm) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        closure$drawAlgorithm(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1), closure$canvas);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawLine(elementId, drawAlgorithm) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawLine$lambda(canvas, points, drawAlgorithm);
  }
  function drawDDA(source, target, canvas) {
    var tmp$;
    var tmp$_0 = source;
    var x1 = tmp$_0.component1()
    , y1 = tmp$_0.component2();
    var tmp$_1 = target;
    var x2 = tmp$_1.component1()
    , y2 = tmp$_1.component2();
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    console.log('\n' + 'Draw DDA: (' + x1 + ';' + y1 + ') and (' + x2 + ';' + y2 + ')');
    var length = Math.max(abs(Math, x2 - x1 | 0), abs(Math, y2 - y1 | 0));
    var dx = (x2 - x1 | 0) / length;
    var dy = (y2 - y1 | 0) / length;
    console.log('Length: ' + length + '; dx: ' + dx + '; dy: ' + dy);
    var x = x1 + 0.5 * sign(Math, dx);
    var y = y1 + 0.5 * sign(Math, dy);
    drawPixel(context, x | 0, y | 0);
    console.log('Step 0: x:' + x + '; y:' + y + ', Plot(' + (x | 0) + ',' + (y | 0) + ')');
    var i = 1;
    while (i <= length) {
      x += dx;
      y += dy;
      window.setTimeout(Kotlin.getCallableRef('waitDrawDDA', function (context, i, x, y) {
        return waitDrawDDA(context, i, x, y);
      }), 100 * i | 0, context, i, x, y);
      i = i + 1 | 0;
    }
  }
  function drawBresenham(source, target, canvas) {
    var tmp$;
    var tmp$_0 = source;
    var x1 = tmp$_0.component1()
    , y1 = tmp$_0.component2();
    var tmp$_1 = target;
    var x2 = tmp$_1.component1()
    , y2 = tmp$_1.component2();
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    console.log('\n' + 'Draw Bresenham: (' + x1 + ';' + y1 + ') and (' + x2 + ';' + y2 + ')');
    var x = x1;
    var y = y1;
    var dx = abs(Math, x2 - x1 | 0);
    var dy = abs(Math, y2 - y1 | 0);
    var e;
    console.log('dx: ' + dx + '; dy: ' + dy);
    var changeX = x1 < x2 ? 1 : -1;
    var changeY = y1 < y2 ? 1 : -1;
    drawPixel(context, x, y);
    var i = 1;
    if (dx >= dy) {
      e = 2 * dy - dx;
      console.log('Step 0: x:' + x + '; y:' + y + ", e':" + e + ' Plot(' + x + ',' + y + ')');
      while (i <= dx) {
        var eOld = e;
        if (e >= 0) {
          y = y + changeY | 0;
          e -= 2 * dx;
        }
        x = x + changeX | 0;
        e += 2 * dy;
        window.setTimeout(Kotlin.getCallableRef('waitDrawBresenham', function (context, i, x, y, eOld, e) {
          return waitDrawBresenham(context, i, x, y, eOld, e);
        }), 100 * i | 0, context, i, x, y, eOld, e);
        i = i + 1 | 0;
      }
    }
     else {
      e = 2 * dx - dy;
      console.log('Step 0: x:' + x + '; y:' + y + ", e':" + e + ' Plot(' + x + ',' + y + ')');
      while (i <= dy) {
        var eOld_0 = e;
        if (e >= 0) {
          x = x + changeX | 0;
          e -= 2 * dy;
        }
        y = y + changeY | 0;
        e += 2 * dx;
        window.setTimeout(Kotlin.getCallableRef('waitDrawBresenham', function (context, i, x, y, eOld, e) {
          return waitDrawBresenham(context, i, x, y, eOld, e);
        }), 100 * i | 0, context, i, x, y, eOld_0, e);
        i = i + 1 | 0;
      }
    }
  }
  function drawWu(source, target, canvas) {
    var tmp$;
    var tmp$_0 = source;
    var x1 = tmp$_0.component1()
    , y1 = tmp$_0.component2();
    var tmp$_1 = target;
    var x2 = tmp$_1.component1()
    , y2 = tmp$_1.component2();
    if (x1 === x2 || y1 === y2) {
      drawBresenham(source, target, canvas);
      return;
    }
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    console.log('\n' + 'Draw Wu: (' + x1 + ';' + y1 + ') and (' + x2 + ';' + y2 + ')');
    var x = x1;
    var y = y1;
    var dx = abs(Math, x2 - x1 | 0);
    var dy = abs(Math, y2 - y1 | 0);
    var e;
    console.log('dx: ' + dx + '; dy: ' + dy);
    var changeX = x1 < x2 ? 1 : -1;
    var changeY = y1 < y2 ? 1 : -1;
    drawPixel(context, x, y);
    var i = 1;
    if (dx >= dy) {
      e = dy / dx - 0.5;
      console.log('Step 0: x:' + x + '; y:' + y + ", e':" + e + ' Plot(' + x + ',' + y + ')');
      while (i <= dx) {
        if (e >= 0) {
          y = y + changeY | 0;
          e -= 1;
        }
        x = x + changeX | 0;
        e += dy / dx;
        window.setTimeout(Kotlin.getCallableRef('waitDrawWu', function (context, i, x, y, e, changeX, changeY) {
          return waitDrawWu(context, i, x, y, e, changeX, changeY);
        }), 100 * i | 0, context, i, x, y, e, 0, changeY);
        i = i + 1 | 0;
      }
    }
     else {
      e = dx / dy - 0.5;
      console.log('Step 0: x:' + x + '; y:' + y + ", e':" + e + ' Plot(' + x + ',' + y + ')');
      while (i <= dy) {
        if (e >= 0) {
          x = x + changeX | 0;
          e -= 1;
        }
        y = y + changeY | 0;
        e += dx / dy;
        window.setTimeout(Kotlin.getCallableRef('waitDrawWu', function (context, i, x, y, e, changeX, changeY) {
          return waitDrawWu(context, i, x, y, e, changeX, changeY);
        }), 100 * i | 0, context, i, x, y, e, changeX, 0);
        i = i + 1 | 0;
      }
    }
  }
  function initLab2$lambda(it) {
    drawCircle('canvas');
  }
  function initLab2$lambda_0(it) {
    drawEllipse('canvas');
  }
  function initLab2$lambda_1(it) {
    drawHyperbola('canvas');
  }
  function initLab2$lambda_2(it) {
    drawParabola('canvas');
  }
  function initLab2() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    console.log('Init lab 2');
    var buttonCircle = Kotlin.isType(tmp$ = document.getElementById('circle'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonCircle.onclick = initLab2$lambda;
    console.log('Init buttonCircle');
    var buttonEllipse = Kotlin.isType(tmp$_0 = document.getElementById('ellipse'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonEllipse.onclick = initLab2$lambda_0;
    console.log('Init buttonEllipse');
    var buttonHyperbola = Kotlin.isType(tmp$_1 = document.getElementById('hyperbola'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonHyperbola.onclick = initLab2$lambda_1;
    console.log('Init buttonHyperbola');
    var buttonParabola = Kotlin.isType(tmp$_2 = document.getElementById('parabola'), HTMLButtonElement) ? tmp$_2 : Kotlin.throwCCE();
    buttonParabola.onclick = initLab2$lambda_2;
    console.log('Init buttonParabola');
  }
  function drawCircle$lambda(closure$canvas, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        var radius = calcRadius(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1));
        drawCircleAlgorithm(closure$points.get_za3lpa$(0), radius, closure$canvas);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawCircle(elementId) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawCircle$lambda(canvas, points);
  }
  function drawEllipse$lambda(closure$canvas, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 3) {
        var a = abs(Math, closure$points.get_za3lpa$(0).x - closure$points.get_za3lpa$(1).x | 0) | 0;
        var b = abs(Math, closure$points.get_za3lpa$(0).y - closure$points.get_za3lpa$(2).y | 0) | 0;
        drawEllipseAlgorithm(closure$points.get_za3lpa$(0), a, b, closure$canvas);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawEllipse(elementId) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawEllipse$lambda(canvas, points);
  }
  function drawHyperbola$lambda(closure$canvas, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 3) {
        var a = abs(Math, closure$points.get_za3lpa$(0).x - closure$points.get_za3lpa$(1).x | 0) | 0;
        var b = abs(Math, closure$points.get_za3lpa$(0).y - closure$points.get_za3lpa$(2).y | 0) | 0;
        drawHyperbolaAlgorithm(closure$points.get_za3lpa$(0), a, b, closure$canvas);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawHyperbola(elementId) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawHyperbola$lambda(canvas, points);
  }
  function drawParabola$lambda(closure$canvas, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        var a = abs(Math, closure$points.get_za3lpa$(0).y - closure$points.get_za3lpa$(1).y | 0) | 0;
        drawParabolaAlgorithm(closure$points.get_za3lpa$(0), a, closure$canvas);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawParabola(elementId) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawParabola$lambda(canvas, points);
  }
  function calcRadius(p1, p2) {
    var tmp$ = p1;
    var x1 = tmp$.component1()
    , y1 = tmp$.component2();
    var tmp$_0 = p2;
    var x2 = tmp$_0.component1()
    , y2 = tmp$_0.component2();
    var max = Math.max(abs(Math, x2 - x1 | 0), abs(Math, y2 - y1 | 0));
    var min = Math.min(abs(Math, x2 - x1 | 0), abs(Math, y2 - y1 | 0));
    return Math.sqrt(Math.pow(max, 2.0) + Math.pow(min, 2.0)) | 0;
  }
  function waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    drawPixel(context, x + center.x | 0, y + center.y | 0);
    drawPixel(context, -x + center.x | 0, -y + center.y | 0);
    drawPixel(context, x + center.x | 0, -y + center.y | 0);
    drawPixel(context, -x + center.x | 0, y + center.y | 0);
    console.log('Step ' + i + ': delta(i): ' + deltaOld + '; d:' + d + '; d*:' + dz + '; pixel:' + String.fromCharCode(Kotlin.unboxChar(pixel)) + '; x:' + (x + center.x | 0) + '; y:' + (y + center.y | 0) + '; delta(i+1):' + delta + ' Plot(' + (x + center.x | 0) + ',' + (y + center.y | 0) + ')');
  }
  function waitDrawEllipse(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    waitDrawCircle(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
  }
  function waitDrawHyperbola(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    waitDrawCircle(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
  }
  function waitDrawParabola(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    drawPixel(context, x + center.x | 0, y + center.y | 0);
    drawPixel(context, -x + center.x | 0, y + center.y | 0);
    console.log('Step ' + i + ': delta(i): ' + deltaOld + '; d:' + d + '; d*:' + dz + '; pixel:' + String.fromCharCode(Kotlin.unboxChar(pixel)) + '; x:' + (x + center.x | 0) + '; y:' + (y + center.y | 0) + '; delta(i+1):' + delta + ' Plot(' + (x + center.x | 0) + ',' + (y + center.y | 0) + ')');
  }
  function drawCircleAlgorithm(center, radius, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var x = 0;
    var y = radius;
    console.log('Draw Circle: center - (' + center.x + ';' + center.y + '), radius - ' + radius);
    var limit = y - radius | 0;
    var delta = 2 - (2 * radius | 0) | 0;
    window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
      return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
    }), 50, context, center, 0, 0, 0, 0, Kotlin.toBoxedChar(48), x, y, delta);
    var i = 0;
    while (y > limit) {
      i = i + 1 | 0;
      var deltaOld = delta;
      var pixel;
      var dz = (2 * delta | 0) - (2 * x | 0) - 1 | 0;
      if (delta > 0 && dz > 0) {
        y = y - 1 | 0;
        delta = delta + (1 - (2 * y | 0)) | 0;
        pixel = 86;
        window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, 0, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + (2 * y | 0) - 1 | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + (1 + (2 * x | 0)) | 0;
        pixel = 72;
        window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, d, 0, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + ((2 * x | 0) - (2 * y | 0) + 2) | 0;
      pixel = 68;
      window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
        return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
      }), 100 * i | 0, context, center, i, deltaOld, d, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
    }
  }
  function drawEllipseAlgorithm(center, a, b, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var aPow2 = Math.pow(a, 2.0) | 0;
    var bPow2 = Math.pow(b, 2.0) | 0;
    var x = 0;
    var y = b;
    console.log('Draw Ellipse: center - (' + center.x + ';' + center.y + '), a - ' + a + ', b - ' + b);
    var limit = y - b | 0;
    var delta = aPow2 + bPow2 - Kotlin.imul(2 * aPow2 | 0, b) | 0;
    window.setTimeout(Kotlin.getCallableRef('waitDrawEllipse', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
      return waitDrawEllipse(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
    }), 50, context, center, 0, 0, 0, 0, Kotlin.toBoxedChar(48), x, y, delta);
    var i = 0;
    while (y > limit) {
      i = i + 1 | 0;
      var deltaOld = delta;
      var pixel;
      var dz = (2 * delta | 0) - Kotlin.imul(2 * x | 0, bPow2) - 1 | 0;
      if (delta > 0 && dz > 0) {
        y = y - 1 | 0;
        delta = delta + (aPow2 - Kotlin.imul(2 * y | 0, aPow2)) | 0;
        pixel = 86;
        window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, 0, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + Kotlin.imul(2 * y | 0, aPow2) - 1 | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + (bPow2 + Kotlin.imul(2 * x | 0, bPow2)) | 0;
        pixel = 72;
        window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, d, 0, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + (Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0) + Kotlin.imul(aPow2, 1 - (2 * y | 0) | 0)) | 0;
      pixel = 68;
      window.setTimeout(Kotlin.getCallableRef('waitDrawCircle', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
        return waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
      }), 100 * i | 0, context, center, i, deltaOld, d, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
    }
  }
  function drawHyperbolaAlgorithm(center, a, b, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var aPow2 = Math.pow(a, 2.0) | 0;
    var bPow2 = Math.pow(b, 2.0) | 0;
    var x = 0;
    var y = b;
    console.log('Draw Hyperbola: center - (' + center.x + ';' + center.y + '), a - ' + a + ', b - ' + b);
    var delta = aPow2 + Kotlin.imul(2 * aPow2 | 0, b) - bPow2 | 0;
    window.setTimeout(Kotlin.getCallableRef('waitDrawEllipse', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
      return waitDrawEllipse(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
    }), 50, context, center, 0, 0, 0, 0, Kotlin.toBoxedChar(48), x, y, delta);
    var i = 0;
    while (i < 50) {
      i = i + 1 | 0;
      var deltaOld = delta;
      var pixel;
      var dz = (2 * delta | 0) - Kotlin.imul(aPow2, (2 * y | 0) + 1 | 0) | 0;
      if (delta > 0 && dz > 0) {
        x = x + 1 | 0;
        delta = delta - (Kotlin.imul(bPow2 * 2 | 0, x) + bPow2) | 0;
        pixel = 72;
        window.setTimeout(Kotlin.getCallableRef('waitDrawHyperbola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawHyperbola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, 0, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0) | 0;
      if (delta < 0 && d <= 0) {
        y = y + 1 | 0;
        delta = delta + (Kotlin.imul(aPow2 * 2 | 0, y) + aPow2) | 0;
        pixel = 86;
        window.setTimeout(Kotlin.getCallableRef('waitDrawHyperbola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawHyperbola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, d, 0, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y + 1 | 0;
      delta = delta + (Kotlin.imul(aPow2, (2 * y | 0) + 1 | 0) - Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0)) | 0;
      pixel = 68;
      window.setTimeout(Kotlin.getCallableRef('waitDrawHyperbola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
        return waitDrawHyperbola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
      }), 100 * i | 0, context, center, i, deltaOld, d, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
    }
  }
  function drawParabolaAlgorithm(center, a, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var x = 0;
    var y = 0;
    console.log('Draw Parabola: center - (' + center.x + ';' + center.y + '), a - ' + a);
    var delta = 1 - (2 * a | 0) | 0;
    window.setTimeout(Kotlin.getCallableRef('waitDrawParabola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
      return waitDrawParabola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
    }), 50, context, center, 0, 0, 0, 0, Kotlin.toBoxedChar(48), x, y, delta);
    var i = 0;
    while (i < 50) {
      i = i + 1 | 0;
      var deltaOld = delta;
      var pixel;
      var dz = (2 * delta | 0) - (2 * x | 0) - 1 | 0;
      if (delta > 0 && dz > 0) {
        y = y - 1 | 0;
        delta = delta - (2 * a | 0) | 0;
        pixel = 86;
        window.setTimeout(Kotlin.getCallableRef('waitDrawParabola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawParabola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, 0, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + (2 * a | 0) | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + ((2 * x | 0) + 1) | 0;
        pixel = 72;
        window.setTimeout(Kotlin.getCallableRef('waitDrawParabola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
          return waitDrawParabola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
        }), 100 * i | 0, context, center, i, deltaOld, d, 0, Kotlin.toBoxedChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + ((2 * x | 0) + 1 - (2 * a | 0)) | 0;
      pixel = 68;
      window.setTimeout(Kotlin.getCallableRef('waitDrawParabola', function (context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
        return waitDrawParabola(context, center, i, deltaOld, d, dz, pixel, x, y, delta);
      }), 100 * i | 0, context, center, i, deltaOld, d, dz, Kotlin.toBoxedChar(pixel), x, y, delta);
    }
  }
  function initLab3$lambda(it) {
    drawCurves('canvas', Kotlin.getCallableRef('drawHermite', function (points, context) {
      return drawHermite(points, context);
    }));
  }
  function initLab3$lambda_0(it) {
    drawCurves('canvas', Kotlin.getCallableRef('drawBezier', function (points, context) {
      return drawBezier(points, context);
    }));
  }
  function initLab3$lambda_1(it) {
    drawCurvesPointsN('canvas', Kotlin.getCallableRef('drawBSpline', function (points, context) {
      return drawBSpline(points, context);
    }));
  }
  function initLab3() {
    var tmp$, tmp$_0, tmp$_1;
    console.log('Init lab 3');
    var buttonHermite = Kotlin.isType(tmp$ = document.getElementById('hermite'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonHermite.onclick = initLab3$lambda;
    console.log('Init buttonHermite');
    var buttonBezier = Kotlin.isType(tmp$_0 = document.getElementById('bezier'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonBezier.onclick = initLab3$lambda_0;
    console.log('Init buttonBezier');
    var buttonBSpline = Kotlin.isType(tmp$_1 = document.getElementById('b-spline'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonBSpline.onclick = initLab3$lambda_1;
    console.log('Init buttonBSpline');
  }
  function waitDrawCurves(context, t, x, y) {
    drawPixel(context, Kotlin.numberToInt(x), Kotlin.numberToInt(y));
    console.log('t: ' + t + '; x(t): ' + x + '; y(t): ' + y);
  }
  function waitDrawBSpline(context, i, t, x, y) {
    drawPixel(context, Kotlin.numberToInt(x), Kotlin.numberToInt(y));
    console.log('i: ' + i + '; t: ' + t + '; x(t): ' + x + '; y(t): ' + y);
  }
  function drawCurves$lambda(closure$canvas, closure$points, closure$drawAlgorithm, closure$context) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 4) {
        closure$drawAlgorithm(closure$points, closure$context);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawCurves(elementId, drawAlgorithm) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawCurves$lambda(canvas, points, drawAlgorithm, context);
  }
  function drawCurvesPointsN$lambda(closure$canvas, closure$points, closure$size, closure$drawAlgorithm, closure$context) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === closure$size) {
        closure$drawAlgorithm(closure$points, closure$context);
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawCurvesPointsN(elementId, drawAlgorithm) {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var sizeInput = Kotlin.isType(tmp$_1 = document.getElementById('points-number'), HTMLInputElement) ? tmp$_1 : Kotlin.throwCCE();
    var size = toInt(sizeInput.value);
    canvas.onclick = drawCurvesPointsN$lambda(canvas, points, size, drawAlgorithm, context);
  }
  function drawHermite(points, context) {
    var p1 = points.get_za3lpa$(0);
    var p2 = points.get_za3lpa$(1);
    var p3 = points.get_za3lpa$(2);
    var p4 = points.get_za3lpa$(3);
    console.log('Draw Hermite');
    var i = 0;
    var t = 0.0;
    var step = 0.01;
    var a = matrixOf(4, 4, [2, -2, 1, 1, -3, 3, -2, -1, 0, 0, 1, 0, 1, 0, 0, 0]);
    var b = matrixOf(2, 4, [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y]);
    var c = x(a, b);
    while (t <= 1) {
      var tMatrix = matrixOf(4, 1, [t * t * t, t * t, t, 1]);
      var r = x(tMatrix, c);
      var x_0 = r.get_vux9f0$(0, 0);
      var y = r.get_vux9f0$(1, 0);
      window.setTimeout(Kotlin.getCallableRef('waitDrawCurves', function (context, t, x, y) {
        return waitDrawCurves(context, t, x, y);
      }), 10 * i | 0, context, t, x_0 | 0, y | 0);
      t += step;
      i = i + 1 | 0;
    }
  }
  function drawBezier(points, context) {
    var p1 = points.get_za3lpa$(0);
    var p2 = points.get_za3lpa$(1);
    var p3 = points.get_za3lpa$(2);
    var p4 = points.get_za3lpa$(3);
    console.log('Draw Bezier');
    var i = 0;
    var t = 0.0;
    var step = 0.005;
    var a = matrixOf(4, 4, [-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0]);
    var b = matrixOf(2, 4, [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y]);
    var c = x(a, b);
    while (t <= 1) {
      var tMatrix = matrixOf(4, 1, [t * t * t, t * t, t, 1]);
      var r = x(tMatrix, c);
      var x_0 = r.get_vux9f0$(0, 0);
      var y = r.get_vux9f0$(1, 0);
      window.setTimeout(Kotlin.getCallableRef('waitDrawCurves', function (context, t, x, y) {
        return waitDrawCurves(context, t, x, y);
      }), 10 * i | 0, context, t, x_0 | 0, y | 0);
      t += step;
      i = i + 1 | 0;
    }
  }
  function drawBSpline(points, context) {
    var n = points.size;
    console.log('Draw B-spline');
    var k = 0;
    var step = 0.01;
    var a = matrixOf(4, 4, [-1, 3, -3, 1, 3, -6, 3, 0, -3, 0, 3, 0, 1, 4, 1, 0]);
    var i = 1;
    while (i <= (n - 3 | 0)) {
      var b = matrixOf(2, 4, [points.get_za3lpa$(i - 1 | 0).x, points.get_za3lpa$(i - 1 | 0).y, points.get_za3lpa$(i).x, points.get_za3lpa$(i).y, points.get_za3lpa$(i + 1 | 0).x, points.get_za3lpa$(i + 1 | 0).y, points.get_za3lpa$(i + 2 | 0).x, points.get_za3lpa$(i + 2 | 0).y]);
      var c = x(a, b);
      var t = 0.0;
      while (t <= 1) {
        var tMatrix = matrixOf(4, 1, [t * t * t, t * t, t, 1]);
        var r = x(tMatrix, c);
        var x_0 = r.get_vux9f0$(0, 0) / 6;
        var y = r.get_vux9f0$(1, 0) / 6;
        window.setTimeout(Kotlin.getCallableRef('waitDrawBSpline', function (context, i, t, x, y) {
          return waitDrawBSpline(context, i, t, x, y);
        }), 10 * k | 0, context, i, t, x_0 | 0, y | 0);
        t += step;
        k = k + 1 | 0;
      }
      i = i + 1 | 0;
    }
  }
  function Coordinate(x, y) {
    this.x = x;
    this.y = y;
  }
  Coordinate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Coordinate',
    interfaces: []
  };
  Coordinate.prototype.component1 = function () {
    return this.x;
  };
  Coordinate.prototype.component2 = function () {
    return this.y;
  };
  Coordinate.prototype.copy_vux9f0$ = function (x, y) {
    return new Coordinate(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Coordinate.prototype.toString = function () {
    return 'Coordinate(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Coordinate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Coordinate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Coordinates(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  Coordinates.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Coordinates',
    interfaces: []
  };
  Coordinates.prototype.component1 = function () {
    return this.x1;
  };
  Coordinates.prototype.component2 = function () {
    return this.y1;
  };
  Coordinates.prototype.component3 = function () {
    return this.x2;
  };
  Coordinates.prototype.component4 = function () {
    return this.y2;
  };
  Coordinates.prototype.copy_tjonv8$ = function (x1, y1, x2, y2) {
    return new Coordinates(x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1, x2 === void 0 ? this.x2 : x2, y2 === void 0 ? this.y2 : y2);
  };
  Coordinates.prototype.toString = function () {
    return 'Coordinates(x1=' + Kotlin.toString(this.x1) + (', y1=' + Kotlin.toString(this.y1)) + (', x2=' + Kotlin.toString(this.x2)) + (', y2=' + Kotlin.toString(this.y2)) + ')';
  };
  Coordinates.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    result = result * 31 + Kotlin.hashCode(this.x2) | 0;
    result = result * 31 + Kotlin.hashCode(this.y2) | 0;
    return result;
  };
  Coordinates.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1) && Kotlin.equals(this.x2, other.x2) && Kotlin.equals(this.y2, other.y2)))));
  };
  function Color(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  Color.prototype.toString = function () {
    return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
  };
  Color.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  Color.prototype.component1 = function () {
    return this.r;
  };
  Color.prototype.component2 = function () {
    return this.g;
  };
  Color.prototype.component3 = function () {
    return this.b;
  };
  Color.prototype.component4 = function () {
    return this.a;
  };
  Color.prototype.copy_gb4hak$ = function (r, g, b, a) {
    return new Color(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function render$lambda(this$render) {
    return function (x, y, z, a, color) {
      this$render.fillStyle = color != null ? 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')' : 'rgba(255, 255, 255, 0)';
      this$render.fillRect(x, y, 1.0, 1.0);
    };
  }
  function render($receiver) {
    $receiver.clearRect(0.0, 0.0, Scene_getInstance().size, Scene_getInstance().size);
    var $receiver_0 = Scene_getInstance().array.array;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      var x = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var tmp$_1, tmp$_0_0;
      var index_0 = 0;
      for (tmp$_1 = 0; tmp$_1 !== item.length; ++tmp$_1) {
        var item_0 = item[tmp$_1];
        var y = (tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0);
        var tmp$_2, tmp$_0_1;
        var index_1 = 0;
        for (tmp$_2 = 0; tmp$_2 !== item_0.length; ++tmp$_2) {
          var item_1 = item_0[tmp$_2];
          var z = (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1);
          var tmp$_3, tmp$_0_2;
          var index_2 = 0;
          for (tmp$_3 = 0; tmp$_3 !== item_1.length; ++tmp$_3) {
            var item_2 = item_1[tmp$_3];
            render$lambda($receiver)(x, y, z, (tmp$_0_2 = index_2, index_2 = tmp$_0_2 + 1 | 0, tmp$_0_2), item_2);
          }
        }
      }
    }
  }
  function drawPixel($receiver, x, y, z, a) {
    if (z === void 0)
      z = 0;
    if (a === void 0)
      a = 0;
    $receiver.fillStyle = 'rgba(0, 0, 0, 1)';
    Scene_getInstance().array.set_6isa55$(x, y, z, a, new Color(0, 0, 0, 1.0));
    $receiver.fillRect(x, y, 1.0, 1.0);
  }
  function drawAlfaPixel($receiver, alfa, x, y, z, a) {
    if (z === void 0)
      z = 0;
    if (a === void 0)
      a = 0;
    Scene_getInstance().array.set_6isa55$(x, y, z, a, new Color(0, 0, 0, alfa));
    $receiver.fillStyle = 'rgba(0, 0, 0, ' + alfa + ')';
    $receiver.fillRect(x, y, 1.0, 1.0);
    $receiver.fillStyle = 'rgba(0, 0, 0, 1)';
  }
  function sign($receiver, value) {
    if (Kotlin.numberToDouble(value) < 0)
      return -1;
    else if (Kotlin.numberToDouble(value) > 0)
      return 1;
    else
      return 0;
  }
  function abs($receiver, value) {
    return Math.abs(value);
  }
  function getMousePosOnCanvas(canvas, event) {
    var tmp$;
    var rect = canvas.getBoundingClientRect();
    var evt = Kotlin.isType(tmp$ = event, MouseEvent) ? tmp$ : Kotlin.throwCCE();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    return new Coordinate(x / Scene_getInstance().scale | 0, y / Scene_getInstance().scale | 0);
  }
  var package$com = _.com || (_.com = {});
  var package$ichipsea = package$com.ichipsea || (package$com.ichipsea = {});
  var package$kotlin = package$ichipsea.kotlin || (package$ichipsea.kotlin = {});
  var package$matrix = package$kotlin.matrix || (package$kotlin.matrix = {});
  package$matrix.Matrix = Matrix;
  package$matrix.get_size_fywbi8$ = get_size;
  package$matrix.MutableMatrix = MutableMatrix;
  $$importsForInline$$['giis-lab'] = _;
  package$matrix.AbstractMatrix = AbstractMatrix;
  package$matrix.TransposedMatrix = TransposedMatrix;
  package$matrix.TransposedMutableMatrix = TransposedMutableMatrix;
  package$matrix.asTransposed_g0cbpy$ = asTransposed;
  package$matrix.asTransposed_4f3t2d$ = asTransposed_0;
  package$matrix.ListMatrix = ListMatrix;
  package$matrix.MutableListMatrix = MutableListMatrix;
  package$matrix.matrixOf_xv94kn$ = matrixOf;
  package$matrix.mutableMatrixOf_xv94kn$ = mutableMatrixOf;
  package$matrix.prepareListForMatrix_0 = prepareListForMatrix;
  package$matrix.createMatrix_6qkxfg$ = createMatrix;
  package$matrix.createMutableMatrix_6qkxfg$ = createMutableMatrix;
  package$matrix.mapIndexed$f = mapIndexed$lambda;
  package$matrix.mapIndexed_hacaqk$ = mapIndexed;
  package$matrix.map$f = map$lambda;
  package$matrix.map_taft24$ = map;
  package$matrix.forEachIndexed_x3un2v$ = forEachIndexed;
  package$matrix.forEach$f = forEach$lambda;
  package$matrix.forEach_akez33$ = forEach;
  package$matrix.toList_g0cbpy$ = toList;
  package$matrix.toMutableList_g0cbpy$ = toMutableList_0;
  package$matrix.toMatrix_5pauu2$ = toMatrix;
  package$matrix.toMutableMatrix_5pauu2$ = toMutableMatrix;
  package$matrix.plus_oond31$ = plus;
  package$matrix.unaryMinus_lbyvke$ = unaryMinus;
  package$matrix.minus_oond31$ = minus;
  package$matrix.times_oond31$ = times;
  package$matrix.times_t56byw$ = times_0;
  package$matrix.times_shudpk$ = times_1;
  package$matrix.x_oond31$ = x;
  Array4D$Companion.prototype.invoke$f$f$f = Array4D$Companion$invoke$lambda$lambda$lambda;
  Array4D$Companion.prototype.invoke$f$f = Array4D$Companion$invoke$lambda$lambda;
  Array4D$Companion.prototype.invoke$f = Array4D$Companion$invoke$lambda;
  Array4D$Companion.prototype.invoke$f$f$f_0 = Array4D$Companion$invoke$lambda$lambda$lambda_0;
  Array4D$Companion.prototype.invoke$f$f_0 = Array4D$Companion$invoke$lambda$lambda_0;
  Array4D$Companion.prototype.invoke$f_0 = Array4D$Companion$invoke$lambda_0;
  Object.defineProperty(Array4D, 'Companion', {
    get: Array4D$Companion_getInstance
  });
  Array4D.forEach$f$f$f$f = Array4D$forEach$lambda$lambda$lambda$lambda;
  Array4D.forEach$f$f$f = Array4D$forEach$lambda$lambda$lambda;
  Array4D.forEach$f$f = Array4D$forEach$lambda$lambda;
  Array4D.forEach$f = Array4D$forEach$lambda;
  Array4D.forEachIndexed$f$f$f$f = Array4D$forEachIndexed$lambda$lambda$lambda$lambda;
  Array4D.forEachIndexed$f$f$f = Array4D$forEachIndexed$lambda$lambda$lambda;
  Array4D.forEachIndexed$f$f = Array4D$forEachIndexed$lambda$lambda;
  Array4D.forEachIndexed$f = Array4D$forEachIndexed$lambda;
  var package$giis = _.giis || (_.giis = {});
  package$giis.Array4D = Array4D;
  Object.defineProperty(package$giis, 'Scene', {
    get: Scene_getInstance
  });
  package$giis.main_kand9s$ = main;
  package$giis.changeScale_rnuka6$ = changeScale;
  package$giis.init = init;
  package$giis.initLab1 = initLab1;
  package$giis.waitDrawDDA_u8ceq0$ = waitDrawDDA;
  package$giis.waitDrawBresenham_b5079k$ = waitDrawBresenham;
  package$giis.waitDrawWu_hz4loq$ = waitDrawWu;
  package$giis.drawLine_jpn0qt$ = drawLine;
  package$giis.drawDDA_lx35d4$ = drawDDA;
  package$giis.drawBresenham_lx35d4$ = drawBresenham;
  package$giis.drawWu_lx35d4$ = drawWu;
  package$giis.initLab2 = initLab2;
  package$giis.drawCircle_61zpoe$ = drawCircle;
  package$giis.drawEllipse_61zpoe$ = drawEllipse;
  package$giis.drawHyperbola_61zpoe$ = drawHyperbola;
  package$giis.drawParabola_61zpoe$ = drawParabola;
  package$giis.calcRadius_sc3ow8$ = calcRadius;
  package$giis.waitDrawCircle_s01kkh$ = waitDrawCircle;
  package$giis.waitDrawEllipse_s01kkh$ = waitDrawEllipse;
  package$giis.waitDrawHyperbola_s01kkh$ = waitDrawHyperbola;
  package$giis.waitDrawParabola_s01kkh$ = waitDrawParabola;
  package$giis.drawCircleAlgorithm_krfmak$ = drawCircleAlgorithm;
  package$giis.drawEllipseAlgorithm_jrt2a2$ = drawEllipseAlgorithm;
  package$giis.drawHyperbolaAlgorithm_jrt2a2$ = drawHyperbolaAlgorithm;
  package$giis.drawParabolaAlgorithm_krfmak$ = drawParabolaAlgorithm;
  package$giis.initLab3 = initLab3;
  package$giis.waitDrawCurves_u8ceq0$ = waitDrawCurves;
  package$giis.waitDrawBSpline_ah1w02$ = waitDrawBSpline;
  package$giis.drawCurves_6wvp7q$ = drawCurves;
  package$giis.drawCurvesPointsN_6wvp7q$ = drawCurvesPointsN;
  package$giis.drawHermite_1ee4u1$ = drawHermite;
  package$giis.drawBezier_1ee4u1$ = drawBezier;
  package$giis.drawBSpline_1ee4u1$ = drawBSpline;
  package$giis.Coordinate = Coordinate;
  package$giis.Coordinates = Coordinates;
  package$giis.Color = Color;
  package$giis.render_qtrdl1$ = render;
  package$giis.drawPixel_q3r7r$ = drawPixel;
  package$giis.drawAlfaPixel_acjj6v$ = drawAlfaPixel;
  package$giis.sign_n5qjh5$ = sign;
  package$giis.abs_oyqxht$ = abs;
  package$giis.getMousePosOnCanvas_ma7i9a$ = getMousePosOnCanvas;
  main([]);
  Kotlin.defineModule('giis-lab', _);
  return _;
}(typeof this['giis-lab'] === 'undefined' ? {} : this['giis-lab'], kotlin);

//# sourceMappingURL=giis-lab.js.map