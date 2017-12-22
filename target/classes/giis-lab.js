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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var Pair = Kotlin.kotlin.Pair;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  TransposedMatrix.prototype = Object.create(AbstractMatrix.prototype);
  TransposedMatrix.prototype.constructor = TransposedMatrix;
  TransposedMutableMatrix.prototype = Object.create(TransposedMatrix.prototype);
  TransposedMutableMatrix.prototype.constructor = TransposedMutableMatrix;
  ListMatrix.prototype = Object.create(AbstractMatrix.prototype);
  ListMatrix.prototype.constructor = ListMatrix;
  MutableListMatrix.prototype = Object.create(ListMatrix.prototype);
  MutableListMatrix.prototype.constructor = MutableListMatrix;
  LineForDraw.prototype = Object.create(ObjectForDraw.prototype);
  LineForDraw.prototype.constructor = LineForDraw;
  DDA.prototype = Object.create(LineForDraw.prototype);
  DDA.prototype.constructor = DDA;
  Bresenham.prototype = Object.create(LineForDraw.prototype);
  Bresenham.prototype.constructor = Bresenham;
  Wu.prototype = Object.create(LineForDraw.prototype);
  Wu.prototype.constructor = Wu;
  Circle.prototype = Object.create(ObjectForDraw.prototype);
  Circle.prototype.constructor = Circle;
  Ellipse.prototype = Object.create(ObjectForDraw.prototype);
  Ellipse.prototype.constructor = Ellipse;
  Hyperbola.prototype = Object.create(ObjectForDraw.prototype);
  Hyperbola.prototype.constructor = Hyperbola;
  Parabola.prototype = Object.create(ObjectForDraw.prototype);
  Parabola.prototype.constructor = Parabola;
  Hermite.prototype = Object.create(ObjectForDraw.prototype);
  Hermite.prototype.constructor = Hermite;
  Bezier.prototype = Object.create(ObjectForDraw.prototype);
  Bezier.prototype.constructor = Bezier;
  BSpline.prototype = Object.create(ObjectForDraw.prototype);
  BSpline.prototype.constructor = BSpline;
  Polygon.prototype = Object.create(ObjectForDraw.prototype);
  Polygon.prototype.constructor = Polygon;
  Object3D.prototype = Object.create(ObjectForDraw.prototype);
  Object3D.prototype.constructor = Object3D;
  Object3DPlane.prototype = Object.create(Object3D.prototype);
  Object3DPlane.prototype.constructor = Object3DPlane;
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
  function Scene() {
    Scene_instance = this;
    this.scale = 4.0;
    this.size = 150;
    this.objects = ArrayList_init();
    this.object3D = null;
    this.polygon = null;
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
    initLab4();
    initLab5();
    initLab6();
    initLab7();
    initLab8();
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
      closure$context.clearRect(0.0, 0.0, Scene_getInstance().size, Scene_getInstance().size);
      Scene_getInstance().objects.clear();
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
    drawLine('canvas', 'dda');
  }
  function initLab1$lambda_0(it) {
    drawLine('canvas', 'bresenham');
  }
  function initLab1$lambda_1(it) {
    drawLine('canvas', 'wu');
  }
  function initLab1() {
    var tmp$, tmp$_0, tmp$_1;
    console.log('Init lab 1');
    var buttonDDA = Kotlin.isType(tmp$ = document.getElementById('dda'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonDDA.onclick = initLab1$lambda;
    var buttonBresenham = Kotlin.isType(tmp$_0 = document.getElementById('bresenham'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonBresenham.onclick = initLab1$lambda_0;
    var buttonWu = Kotlin.isType(tmp$_1 = document.getElementById('wu'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonWu.onclick = initLab1$lambda_1;
  }
  function drawLine$lambda(closure$canvas, closure$points, closure$algorithm) {
    return function (it) {
      var tmp$;
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        tmp$ = closure$algorithm;
        if (Kotlin.equals(tmp$, 'dda')) {
          drawDDA(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1), closure$canvas);
          Scene_getInstance().objects.add_11rb$(new DDA(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1)));
        }
         else if (Kotlin.equals(tmp$, 'bresenham')) {
          drawBresenham(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1), closure$canvas);
          Scene_getInstance().objects.add_11rb$(new Bresenham(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1)));
        }
         else if (Kotlin.equals(tmp$, 'wu')) {
          drawWu(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1), closure$canvas);
          Scene_getInstance().objects.add_11rb$(new Wu(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1)));
        }
         else {
          console.log('Not found algorithm ' + closure$algorithm);
        }
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawLine(elementId, algorithm) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawLine$lambda(canvas, points, algorithm);
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
      drawPixel(context, x | 0, y | 0);
      console.log('Step ' + i + ': x:' + x + '; y:' + y + ', Plot(' + (x | 0) + ',' + (y | 0) + ')');
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
    var x = x1;
    var y = y1;
    var dx = abs(Math, x2 - x1 | 0);
    var dy = abs(Math, y2 - y1 | 0);
    var e;
    var changeX = x1 < x2 ? 1 : -1;
    var changeY = y1 < y2 ? 1 : -1;
    drawPixel(context, x, y);
    var i = 1;
    if (dx >= dy) {
      e = 2 * dy - dx;
      while (i <= dx) {
        if (e >= 0) {
          y = y + changeY | 0;
          e -= 2 * dx;
        }
        x = x + changeX | 0;
        e += 2 * dy;
        drawPixel(context, x, y);
        i = i + 1 | 0;
      }
    }
     else {
      e = 2 * dx - dy;
      while (i <= dy) {
        if (e >= 0) {
          x = x + changeX | 0;
          e -= 2 * dy;
        }
        y = y + changeY | 0;
        e += 2 * dx;
        drawPixel(context, x, y);
        i = i + 1 | 0;
      }
    }
  }
  function drawWu$drawWu(context, i, x, y, e, changeX, changeY) {
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
  function drawWu(source, target, canvas) {
    var tmp$;
    var drawWu = drawWu$drawWu;
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
        drawWu(context, i, x, y, e, 0, changeY);
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
        drawWu(context, i, x, y, e, 0, changeY);
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
    var buttonEllipse = Kotlin.isType(tmp$_0 = document.getElementById('ellipse'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonEllipse.onclick = initLab2$lambda_0;
    var buttonHyperbola = Kotlin.isType(tmp$_1 = document.getElementById('hyperbola'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonHyperbola.onclick = initLab2$lambda_1;
    var buttonParabola = Kotlin.isType(tmp$_2 = document.getElementById('parabola'), HTMLButtonElement) ? tmp$_2 : Kotlin.throwCCE();
    buttonParabola.onclick = initLab2$lambda_2;
  }
  function drawCircle$lambda(closure$canvas, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        var radius = calcRadius(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1));
        drawCircleAlgorithm(closure$points.get_za3lpa$(0), radius, closure$canvas);
        Scene_getInstance().objects.add_11rb$(new Circle(closure$points.get_za3lpa$(0), radius));
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
        Scene_getInstance().objects.add_11rb$(new Ellipse(closure$points.get_za3lpa$(0), a, b));
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
        Scene_getInstance().objects.add_11rb$(new Hyperbola(closure$points.get_za3lpa$(0), a, b));
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
        Scene_getInstance().objects.add_11rb$(new Parabola(closure$points.get_za3lpa$(0), a));
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
  function drawCirclePoints(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    drawPixel(context, x + center.x | 0, y + center.y | 0);
    drawPixel(context, -x + center.x | 0, -y + center.y | 0);
    drawPixel(context, x + center.x | 0, -y + center.y | 0);
    drawPixel(context, -x + center.x | 0, y + center.y | 0);
    console.log('Step ' + i + ': delta(i): ' + deltaOld + '; d:' + d + '; d*:' + dz + '; pixel:' + String.fromCharCode(Kotlin.unboxChar(pixel)) + '; x:' + (x + center.x | 0) + '; y:' + (y + center.y | 0) + '; delta(i+1):' + delta + ' Plot(' + (x + center.x | 0) + ',' + (y + center.y | 0) + ')');
  }
  function drawEllipsePoints(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    drawCirclePoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
  }
  function drawHyperbolaPoints(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
    drawCirclePoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
  }
  function drawParabolaPoints(context, center, i, deltaOld, d, dz, pixel, x, y, delta) {
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
    drawCirclePoints(context, center, 0, 0, 0, 0, 48, x, y, delta);
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
        drawCirclePoints(context, center, i, deltaOld, 0, dz, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + (2 * y | 0) - 1 | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + (1 + (2 * x | 0)) | 0;
        pixel = 72;
        drawCirclePoints(context, center, i, deltaOld, d, 0, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + ((2 * x | 0) - (2 * y | 0) + 2) | 0;
      pixel = 68;
      drawCirclePoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
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
    drawEllipsePoints(context, center, 0, 0, 0, 0, 48, x, y, delta);
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
        drawCirclePoints(context, center, i, deltaOld, 0, dz, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + Kotlin.imul(2 * y | 0, aPow2) - 1 | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + (bPow2 + Kotlin.imul(2 * x | 0, bPow2)) | 0;
        pixel = 72;
        drawCirclePoints(context, center, i, deltaOld, d, 0, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + (Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0) + Kotlin.imul(aPow2, 1 - (2 * y | 0) | 0)) | 0;
      pixel = 68;
      drawCirclePoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
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
    drawEllipsePoints(context, center, 0, 0, 0, 0, 48, x, y, delta);
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
        drawHyperbolaPoints(context, center, i, deltaOld, 0, dz, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0) | 0;
      if (delta < 0 && d <= 0) {
        y = y + 1 | 0;
        delta = delta + (Kotlin.imul(aPow2 * 2 | 0, y) + aPow2) | 0;
        pixel = 86;
        drawHyperbolaPoints(context, center, i, deltaOld, d, 0, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y + 1 | 0;
      delta = delta + (Kotlin.imul(aPow2, (2 * y | 0) + 1 | 0) - Kotlin.imul(bPow2, (2 * x | 0) + 1 | 0)) | 0;
      pixel = 68;
      drawHyperbolaPoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
    }
  }
  function drawParabolaAlgorithm(center, a, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var x = 0;
    var y = 0;
    console.log('Draw Parabola: center - (' + center.x + ';' + center.y + '), a - ' + a);
    var delta = 1 - (2 * a | 0) | 0;
    drawParabolaPoints(context, center, 0, 0, 0, 0, 48, x, y, delta);
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
        drawParabolaPoints(context, center, i, deltaOld, 0, dz, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      var d = (2 * delta | 0) + (2 * a | 0) | 0;
      if (delta < 0 && d <= 0) {
        x = x + 1 | 0;
        delta = delta + ((2 * x | 0) + 1) | 0;
        pixel = 72;
        drawParabolaPoints(context, center, i, deltaOld, d, 0, Kotlin.unboxChar(pixel), x, y, delta);
        continue;
      }
      x = x + 1 | 0;
      y = y - 1 | 0;
      delta = delta + ((2 * x | 0) + 1 - (2 * a | 0)) | 0;
      pixel = 68;
      drawParabolaPoints(context, center, i, deltaOld, d, dz, Kotlin.unboxChar(pixel), x, y, delta);
    }
  }
  function initLab3$lambda(it) {
    drawCurves('canvas', 'hermite');
  }
  function initLab3$lambda_0(it) {
    drawCurves('canvas', 'bezier');
  }
  function initLab3$lambda_1(it) {
    drawCurvesPointsN('canvas', 'bspline');
  }
  function initLab3() {
    var tmp$, tmp$_0, tmp$_1;
    console.log('Init lab 3');
    var buttonHermite = Kotlin.isType(tmp$ = document.getElementById('hermite'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonHermite.onclick = initLab3$lambda;
    var buttonBezier = Kotlin.isType(tmp$_0 = document.getElementById('bezier'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonBezier.onclick = initLab3$lambda_0;
    var buttonBSpline = Kotlin.isType(tmp$_1 = document.getElementById('b-spline'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonBSpline.onclick = initLab3$lambda_1;
  }
  function drawCurves$lambda(closure$canvas, closure$points, closure$algorithm, closure$context) {
    return function (it) {
      var tmp$;
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 4) {
        tmp$ = closure$algorithm;
        if (Kotlin.equals(tmp$, 'hermite')) {
          drawHermite(closure$points, closure$context);
          Scene_getInstance().objects.add_11rb$(new Hermite(ArrayList_init_0(closure$points)));
        }
         else if (Kotlin.equals(tmp$, 'bezier')) {
          drawBezier(closure$points, closure$context);
          Scene_getInstance().objects.add_11rb$(new Bezier(ArrayList_init_0(closure$points)));
        }
         else {
          console.log('Not found algorithm ' + closure$algorithm);
        }
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawCurves(elementId, algorithm) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawCurves$lambda(canvas, points, algorithm, context);
  }
  function drawCurvesPointsN$lambda(closure$canvas, closure$points, closure$size, closure$algorithm, closure$context) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === closure$size) {
        if (Kotlin.equals(closure$algorithm, 'bspline')) {
          drawBSpline(closure$points, closure$context);
          Scene_getInstance().objects.add_11rb$(new BSpline(ArrayList_init_0(closure$points)));
        }
         else {
          console.log('Not found algorithm ' + closure$algorithm);
        }
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function drawCurvesPointsN(elementId, algorithm) {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var sizeInput = Kotlin.isType(tmp$_1 = document.getElementById('points-number'), HTMLInputElement) ? tmp$_1 : Kotlin.throwCCE();
    var size = toInt(sizeInput.value);
    canvas.onclick = drawCurvesPointsN$lambda(canvas, points, size, algorithm, context);
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
    var b = matrixOf(2, 4, [p1.x, p1.y, p4.x, p4.y, p3.x - p1.x | 0, p3.y - p1.y | 0, p4.x - p2.x | 0, p4.y - p2.y | 0]);
    var c = x(a, b);
    while (t <= 1) {
      var tMatrix = matrixOf(4, 1, [t * t * t, t * t, t, 1]);
      var r = x(tMatrix, c);
      var x_0 = r.get_vux9f0$(0, 0);
      var y = r.get_vux9f0$(1, 0);
      drawPixel(context, x_0 | 0, y | 0);
      console.log('t: ' + t + '; x(t): ' + x_0 + '; y(t): ' + y);
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
      drawPixel(context, x_0 | 0, y | 0);
      console.log('t: ' + t + '; x(t): ' + x_0 + '; y(t): ' + y);
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
        drawPixel(context, x_0 | 0, y | 0);
        console.log('i: ' + i + '; t: ' + t + '; x(t): ' + x_0 + '; y(t): ' + y);
        t += step;
        k = k + 1 | 0;
      }
      i = i + 1 | 0;
    }
  }
  function initLab4$lambda(closure$fileInput, closure$canvas) {
    return function (it) {
      loadFile(closure$fileInput, closure$canvas);
    };
  }
  function initLab4$lambda_0(closure$canvas) {
    return function (it) {
      transformationMove(closure$canvas);
    };
  }
  function initLab4$lambda_1(closure$canvas) {
    return function (it) {
      transformationRotating(closure$canvas);
    };
  }
  function initLab4$lambda_2(closure$canvas) {
    return function (it) {
      transformationScaling(closure$canvas);
    };
  }
  function initLab4$lambda_3(closure$canvas) {
    return function (it) {
      transformationReflection(closure$canvas);
    };
  }
  function initLab4$lambda_4(closure$canvas) {
    return function (it) {
      transformationPerspective(closure$canvas);
    };
  }
  function initLab4() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    console.log('Init lab 4');
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var fileInput = Kotlin.isType(tmp$_0 = document.getElementById('file'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    fileInput.addEventListener('change', initLab4$lambda(fileInput, canvas));
    var buttonMoving = Kotlin.isType(tmp$_1 = document.getElementById('moving'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonMoving.onclick = initLab4$lambda_0(canvas);
    var buttonRotating = Kotlin.isType(tmp$_2 = document.getElementById('rotating'), HTMLButtonElement) ? tmp$_2 : Kotlin.throwCCE();
    buttonRotating.onclick = initLab4$lambda_1(canvas);
    var buttonScaling = Kotlin.isType(tmp$_3 = document.getElementById('scaling'), HTMLButtonElement) ? tmp$_3 : Kotlin.throwCCE();
    buttonScaling.onclick = initLab4$lambda_2(canvas);
    var buttonReflection = Kotlin.isType(tmp$_4 = document.getElementById('reflection'), HTMLButtonElement) ? tmp$_4 : Kotlin.throwCCE();
    buttonReflection.onclick = initLab4$lambda_3(canvas);
    var buttonPerspective = Kotlin.isType(tmp$_5 = document.getElementById('perspective'), HTMLButtonElement) ? tmp$_5 : Kotlin.throwCCE();
    buttonPerspective.onclick = initLab4$lambda_4(canvas);
    addKeyboardListener(canvas);
  }
  function addKeyboardListener$lambda(closure$canvas) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (Kotlin.equals(document.activeElement, document.body)) {
        var keyBoardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
        var context = Kotlin.isType(tmp$_0 = closure$canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
        tmp$_1 = keyBoardEvent.key;
        if (Kotlin.equals(tmp$_1, 'ArrowUp')) {
          transformationMove_0(closure$canvas, 0, -1, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'ArrowRight')) {
          transformationMove_0(closure$canvas, 1, 0, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'ArrowDown')) {
          transformationMove_0(closure$canvas, 0, 1, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'ArrowLeft')) {
          transformationMove_0(closure$canvas, -1, 0, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '+')) {
          transformationScaling_0(closure$canvas, 2.0, 2.0, 2.0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '-')) {
          transformationScaling_0(closure$canvas, 0.5, 0.5, 0.5);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '[')) {
          var tmp$_6, tmp$_7;
          tmp$_7 = (tmp$_6 = Scene_getInstance().object3D) != null ? tmp$_6 : Kotlin.throwNPE();
          tmp$_7.perspective = tmp$_7.perspective + 1 | 0;
          tmp$_3 = ((tmp$_2 = Scene_getInstance().object3D) != null ? tmp$_2 : Kotlin.throwNPE()).perspective;
          transformationPerspective_0(closure$canvas, 0.0, 0.0, 1.0 / tmp$_3);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, ']')) {
          var tmp$_8, tmp$_9;
          tmp$_9 = (tmp$_8 = Scene_getInstance().object3D) != null ? tmp$_8 : Kotlin.throwNPE();
          tmp$_9.perspective = tmp$_9.perspective - 1 | 0;
          tmp$_5 = ((tmp$_4 = Scene_getInstance().object3D) != null ? tmp$_4 : Kotlin.throwNPE()).perspective;
          transformationPerspective_0(closure$canvas, 0.0, 0.0, 1.0 / tmp$_5);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '2')) {
          transformationRotating_0(closure$canvas, -3, 0, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '8')) {
          transformationRotating_0(closure$canvas, 3, 0, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '4')) {
          transformationRotating_0(closure$canvas, 0, -3, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '6')) {
          transformationRotating_0(closure$canvas, 0, 3, 0);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '1') || Kotlin.equals(tmp$_1, '7')) {
          transformationRotating_0(closure$canvas, 0, 0, -3);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, '3') || Kotlin.equals(tmp$_1, '9')) {
          transformationRotating_0(closure$canvas, 0, 0, 3);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'x')) {
          transformationReflection_0(closure$canvas, -1, 1, 1);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'y')) {
          transformationReflection_0(closure$canvas, 1, -1, 1);
          render(context);
        }
         else if (Kotlin.equals(tmp$_1, 'z')) {
          transformationReflection_0(closure$canvas, 1, 1, -1);
          render(context);
        }
      }
    };
  }
  function addKeyboardListener(canvas) {
    window.onkeydown = addKeyboardListener$lambda(canvas);
  }
  function transformationMove(canvas) {
    var tmp$;
    var dx = getAxisNumber('x');
    var dy = getAxisNumber('y');
    var dz = getAxisNumber('z');
    transformationMove_0(canvas, dx, dy, dz);
    render(Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  }
  function transformationMove_0(canvas, dx, dy, dz) {
    if (Scene_getInstance().object3D != null) {
      var tmp$, tmp$_0, tmp$_1;
      var t = matrixOf(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, dx, dy, dz, 1]);
      var points = (tmp$ = Scene_getInstance().object3D) != null ? tmp$.points : null;
      var pointSize = (tmp$_1 = (tmp$_0 = Scene_getInstance().object3D) != null ? tmp$_0.points : null) != null ? tmp$_1.size : null;
      var rows = pointSize != null ? pointSize : Kotlin.throwNPE();
      var tmp$_2, tmp$_3;
      var list = ArrayList_init(Kotlin.imul(4, rows));
      tmp$_2 = rows - 1 | 0;
      for (var y = 0; y <= tmp$_2; y++) {
        tmp$_3 = 4 - 1 | 0;
        for (var x_0 = 0; x_0 <= tmp$_3; x_0++) {
          var init$result;
          if (x_0 === 0) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).x;
          }
           else if (x_0 === 1) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).y;
          }
           else if (x_0 === 2) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).z;
          }
           else if (x_0 === 3) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).w;
          }
           else {
            console.log('Error get p[' + x_0 + ',' + y + ']');
            init$result = 0.0;
          }
          list.add_11rb$(init$result);
        }
      }
      var p = new _.com.ichipsea.kotlin.matrix.ListMatrix(4, rows, list);
      var result = x(p, t);
      var tmp$_4, tmp$_5;
      tmp$_4 = result.rows - 1 | 0;
      for (var y_0 = 0; y_0 <= tmp$_4; y_0++) {
        tmp$_5 = result.cols - 1 | 0;
        for (var x_1 = 0; x_1 <= tmp$_5; x_1++) {
          var value = result.get_vux9f0$(x_1, y_0);
          var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
          if (x_1 === 0)
            (tmp$_6 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_6.x = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 1)
            (tmp$_7 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_7.y = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 2)
            (tmp$_8 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_8.z = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 3)
            (tmp$_9 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_9.w = Kotlin.numberToDouble(value)) : null;
          else {
            console.log('Error set p[' + x_1 + ',' + y_0 + ']');
          }
        }
      }
    }
  }
  function transformationRotating(canvas) {
    var tmp$;
    var rx = getAxisNumber('x');
    var ry = getAxisNumber('y');
    var rz = getAxisNumber('z');
    transformationRotating_0(canvas, rx, ry, rz);
    render(Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  }
  function transformationRotating_0(canvas, rx, ry, rz) {
    if (Scene_getInstance().object3D != null) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var centre = ((tmp$ = Scene_getInstance().object3D) != null ? tmp$ : Kotlin.throwNPE()).getCentre();
      transformationMove_0(canvas, -centre.x | 0, -centre.y | 0, -centre.z | 0);
      var cosZ = Math.cos(rz * Math.PI / 180);
      var sinZ = Math.sin(rz * Math.PI / 180);
      var cosX = Math.cos(rx * Math.PI / 180);
      var sinX = Math.sin(rx * Math.PI / 180);
      var cosY = Math.cos(ry * Math.PI / 180);
      var sinY = Math.sin(ry * Math.PI / 180);
      var rByZ = matrixOf(4, 4, [cosZ, sinZ, 0.0, 0.0, -sinZ, cosZ, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
      var rByX = matrixOf(4, 4, [1.0, 0.0, 0.0, 0.0, 0.0, cosX, sinX, 0.0, 0.0, -sinX, cosX, 0.0, 0.0, 0.0, 0.0, 1.0]);
      var rByY = matrixOf(4, 4, [cosY, 0.0, -sinY, 0.0, 0.0, 1.0, 0.0, 0.0, sinY, 0.0, cosY, 0.0, 0.0, 0.0, 0.0, 1.0]);
      var points = (tmp$_0 = Scene_getInstance().object3D) != null ? tmp$_0.points : null;
      var pointSize = (tmp$_2 = (tmp$_1 = Scene_getInstance().object3D) != null ? tmp$_1.points : null) != null ? tmp$_2.size : null;
      var rows = pointSize != null ? pointSize : Kotlin.throwNPE();
      var tmp$_3, tmp$_4;
      var list = ArrayList_init(Kotlin.imul(4, rows));
      tmp$_3 = rows - 1 | 0;
      for (var y = 0; y <= tmp$_3; y++) {
        tmp$_4 = 4 - 1 | 0;
        for (var x_0 = 0; x_0 <= tmp$_4; x_0++) {
          var init$result;
          if (x_0 === 0) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).x;
          }
           else if (x_0 === 1) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).y;
          }
           else if (x_0 === 2) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).z;
          }
           else if (x_0 === 3) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).w;
          }
           else {
            console.log('Error get p[' + x_0 + ',' + y + ']');
            init$result = 0.0;
          }
          list.add_11rb$(init$result);
        }
      }
      var p = new _.com.ichipsea.kotlin.matrix.ListMatrix(4, rows, list);
      var result = x(x(x(p, rByX), rByY), rByZ);
      var tmp$_5, tmp$_6;
      tmp$_5 = result.rows - 1 | 0;
      for (var y_0 = 0; y_0 <= tmp$_5; y_0++) {
        tmp$_6 = result.cols - 1 | 0;
        for (var x_1 = 0; x_1 <= tmp$_6; x_1++) {
          var value = result.get_vux9f0$(x_1, y_0);
          var tmp$_7, tmp$_8, tmp$_9, tmp$_10;
          if (x_1 === 0)
            (tmp$_7 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_7.x = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 1)
            (tmp$_8 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_8.y = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 2)
            (tmp$_9 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_9.z = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 3)
            (tmp$_10 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_10.w = Kotlin.numberToDouble(value)) : null;
          else {
            console.log('Error set p[' + x_1 + ',' + y_0 + ']');
          }
        }
      }
      transformationMove_0(canvas, centre.x | 0, centre.y | 0, centre.z | 0);
    }
  }
  function transformationScaling(canvas) {
    var tmp$;
    var sx = getAxisNumber('x') === 0 ? 1.0 : getAxisNumber('x');
    var sy = getAxisNumber('y') === 0 ? 1.0 : getAxisNumber('y');
    var sz = getAxisNumber('z') === 0 ? 1.0 : getAxisNumber('z');
    transformationScaling_0(canvas, sx, sy, sz);
    render(Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  }
  function transformationScaling_0(canvas, sx, sy, sz) {
    if (Scene_getInstance().object3D != null) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var centre = ((tmp$ = Scene_getInstance().object3D) != null ? tmp$ : Kotlin.throwNPE()).getCentre();
      transformationMove_0(canvas, -centre.x | 0, -centre.y | 0, -centre.z | 0);
      var s = matrixOf(4, 4, [sx, 0.0, 0.0, 0.0, 0.0, sy, 0.0, 0.0, 0.0, 0.0, sz, 0.0, 0.0, 0.0, 0.0, 1.0]);
      var points = (tmp$_0 = Scene_getInstance().object3D) != null ? tmp$_0.points : null;
      var pointSize = (tmp$_2 = (tmp$_1 = Scene_getInstance().object3D) != null ? tmp$_1.points : null) != null ? tmp$_2.size : null;
      var rows = pointSize != null ? pointSize : Kotlin.throwNPE();
      var tmp$_3, tmp$_4;
      var list = ArrayList_init(Kotlin.imul(4, rows));
      tmp$_3 = rows - 1 | 0;
      for (var y = 0; y <= tmp$_3; y++) {
        tmp$_4 = 4 - 1 | 0;
        for (var x_0 = 0; x_0 <= tmp$_4; x_0++) {
          var init$result;
          if (x_0 === 0) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).x;
          }
           else if (x_0 === 1) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).y;
          }
           else if (x_0 === 2) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).z;
          }
           else if (x_0 === 3) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).w;
          }
           else {
            console.log('Error get p[' + x_0 + ',' + y + ']');
            init$result = 0.0;
          }
          list.add_11rb$(init$result);
        }
      }
      var p = new _.com.ichipsea.kotlin.matrix.ListMatrix(4, rows, list);
      var result = x(p, s);
      var tmp$_5, tmp$_6;
      tmp$_5 = result.rows - 1 | 0;
      for (var y_0 = 0; y_0 <= tmp$_5; y_0++) {
        tmp$_6 = result.cols - 1 | 0;
        for (var x_1 = 0; x_1 <= tmp$_6; x_1++) {
          var value = result.get_vux9f0$(x_1, y_0);
          var tmp$_7, tmp$_8, tmp$_9, tmp$_10;
          if (x_1 === 0)
            (tmp$_7 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_7.x = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 1)
            (tmp$_8 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_8.y = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 2)
            (tmp$_9 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_9.z = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 3)
            (tmp$_10 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_10.w = Kotlin.numberToDouble(value)) : null;
          else {
            console.log('Error set p[' + x_1 + ',' + y_0 + ']');
          }
        }
      }
      transformationMove_0(canvas, centre.x | 0, centre.y | 0, centre.z | 0);
    }
  }
  function transformationReflection(canvas) {
    var tmp$;
    var rx = getAxisNumber('x') === 0 ? 1 : -1;
    var ry = getAxisNumber('y') === 0 ? 1 : -1;
    var rz = getAxisNumber('z') === 0 ? 1 : -1;
    transformationReflection_0(canvas, rx, ry, rz);
    render(Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  }
  function transformationReflection_0(canvas, rx, ry, rz) {
    if (Scene_getInstance().object3D != null) {
      var tmp$, tmp$_0, tmp$_1;
      var r = matrixOf(4, 4, [rx, 0, 0, 0, 0, ry, 0, 0, 0, 0, rz, 0, 0, 0, 0, 1]);
      var points = (tmp$ = Scene_getInstance().object3D) != null ? tmp$.points : null;
      var pointSize = (tmp$_1 = (tmp$_0 = Scene_getInstance().object3D) != null ? tmp$_0.points : null) != null ? tmp$_1.size : null;
      var rows = pointSize != null ? pointSize : Kotlin.throwNPE();
      var tmp$_2, tmp$_3;
      var list = ArrayList_init(Kotlin.imul(4, rows));
      tmp$_2 = rows - 1 | 0;
      for (var y = 0; y <= tmp$_2; y++) {
        tmp$_3 = 4 - 1 | 0;
        for (var x_0 = 0; x_0 <= tmp$_3; x_0++) {
          var init$result;
          if (x_0 === 0) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).x;
          }
           else if (x_0 === 1) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).y;
          }
           else if (x_0 === 2) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).z;
          }
           else if (x_0 === 3) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).w;
          }
           else {
            console.log('Error get p[' + x_0 + ',' + y + ']');
            init$result = 0.0;
          }
          list.add_11rb$(init$result);
        }
      }
      var p = new _.com.ichipsea.kotlin.matrix.ListMatrix(4, rows, list);
      var result = x(p, r);
      var tmp$_4, tmp$_5;
      tmp$_4 = result.rows - 1 | 0;
      for (var y_0 = 0; y_0 <= tmp$_4; y_0++) {
        tmp$_5 = result.cols - 1 | 0;
        for (var x_1 = 0; x_1 <= tmp$_5; x_1++) {
          var value = result.get_vux9f0$(x_1, y_0);
          var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
          if (x_1 === 0)
            (tmp$_6 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_6.x = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 1)
            (tmp$_7 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_7.y = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 2)
            (tmp$_8 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_8.z = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 3)
            (tmp$_9 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_9.w = Kotlin.numberToDouble(value)) : null;
          else {
            console.log('Error set p[' + x_1 + ',' + y_0 + ']');
          }
        }
      }
    }
  }
  function transformationPerspective(canvas) {
    var tmp$;
    var oneOndx = getAxisNumber('x') === 0 ? 0.0 : 1.0 / getAxisNumber('x');
    var oneOndy = getAxisNumber('y') === 0 ? 0.0 : 1.0 / getAxisNumber('y');
    var oneOndz = getAxisNumber('z') === 0 ? 0.0 : 1.0 / getAxisNumber('z');
    transformationPerspective_0(canvas, oneOndx, oneOndy, oneOndz);
    render(Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  }
  function transformationPerspective_0(canvas, oneOndx, oneOndy, oneOndz) {
    if (Scene_getInstance().object3D != null) {
      var tmp$, tmp$_0, tmp$_1;
      var r = matrixOf(4, 4, [1.0, 0.0, 0.0, oneOndx, 0.0, 1.0, 0.0, oneOndy, 0.0, 0.0, 1.0, oneOndz, 0.0, 0.0, 0.0, 0.0]);
      var points = (tmp$ = Scene_getInstance().object3D) != null ? tmp$.points : null;
      var pointSize = (tmp$_1 = (tmp$_0 = Scene_getInstance().object3D) != null ? tmp$_0.points : null) != null ? tmp$_1.size : null;
      var rows = pointSize != null ? pointSize : Kotlin.throwNPE();
      var tmp$_2, tmp$_3;
      var list = ArrayList_init(Kotlin.imul(4, rows));
      tmp$_2 = rows - 1 | 0;
      for (var y = 0; y <= tmp$_2; y++) {
        tmp$_3 = 4 - 1 | 0;
        for (var x_0 = 0; x_0 <= tmp$_3; x_0++) {
          var init$result;
          if (x_0 === 0) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).x;
          }
           else if (x_0 === 1) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).y;
          }
           else if (x_0 === 2) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).z;
          }
           else if (x_0 === 3) {
            init$result = (points != null ? points : Kotlin.throwNPE()).get_za3lpa$(y).w;
          }
           else {
            console.log('Error get p[' + x_0 + ',' + y + ']');
            init$result = 0.0;
          }
          list.add_11rb$(init$result);
        }
      }
      var p = new _.com.ichipsea.kotlin.matrix.ListMatrix(4, rows, list);
      var result = x(p, r);
      var tmp$_4, tmp$_5;
      tmp$_4 = result.rows - 1 | 0;
      for (var y_0 = 0; y_0 <= tmp$_4; y_0++) {
        tmp$_5 = result.cols - 1 | 0;
        for (var x_1 = 0; x_1 <= tmp$_5; x_1++) {
          var value = result.get_vux9f0$(x_1, y_0);
          var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
          if (x_1 === 0)
            (tmp$_6 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_6.x = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 1)
            (tmp$_7 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_7.y = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 2)
            (tmp$_8 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_8.z = Kotlin.numberToDouble(value)) : null;
          else if (x_1 === 3)
            (tmp$_9 = points != null ? points.get_za3lpa$(y_0) : null) != null ? (tmp$_9.w = Kotlin.numberToDouble(value)) : null;
          else {
            console.log('Error set p[' + x_1 + ',' + y_0 + ']');
          }
        }
      }
    }
  }
  function getAxisNumber(axis) {
    var tmp$;
    var axisInput = Kotlin.isType(tmp$ = document.getElementById('number-' + axis), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    return toInt(axisInput.value);
  }
  function loadFile$lambda$lambda(closure$file, closure$reader, closure$canvas) {
    return function (event) {
      var tmp$, tmp$_0;
      console.log('Onload ' + closure$file.name);
      var object3dJson = JSON.parse(typeof (tmp$ = closure$reader.result) === 'string' ? tmp$ : Kotlin.throwCCE());
      var listOfPoinus = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var $receiver = object3dJson.points;
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        listOfPoinus.add_11rb$(new Coordinate4D(element[0], element[1], element[2], element[3]));
      }
      var listOfEdges = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var $receiver_0 = object3dJson.edges;
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
        var element_0 = $receiver_0[tmp$_2];
        listOfEdges.add_11rb$(new Edge(listOfPoinus.get_za3lpa$(element_0[0]), listOfPoinus.get_za3lpa$(element_0[1])));
      }
      Scene_getInstance().object3D = new Object3D(listOfPoinus, listOfEdges);
      render(Kotlin.isType(tmp$_0 = closure$canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE());
    };
  }
  function loadFile(input, canvas) {
    var tmp$;
    var file = (tmp$ = input.files) != null ? tmp$[0] : null;
    if (file != null) {
      console.log('Load ' + file.name);
      var reader = new FileReader();
      reader.onload = loadFile$lambda$lambda(file, reader, canvas);
      reader.readAsText(file);
    }
  }
  function initLab5$lambda(it) {
    drawConvexHull('canvas', 'graham');
  }
  function initLab5$lambda_0(it) {
    drawConvexHull('canvas', 'jarvis');
  }
  function initLab5$lambda_1(it) {
    var tmp$;
    if (Scene_getInstance().polygon != null) {
      var block$result;
      checkPointInPolygon('canvas');
      tmp$ = block$result;
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function initLab5$lambda_2(it) {
    var tmp$;
    if (Scene_getInstance().polygon != null) {
      var block$result;
      findPointWithPolygon('canvas');
      tmp$ = block$result;
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function initLab5() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    console.log('Init lab 5');
    var buttonGraham = Kotlin.isType(tmp$ = document.getElementById('graham'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonGraham.onclick = initLab5$lambda;
    var buttonJarvis = Kotlin.isType(tmp$_0 = document.getElementById('jarvis'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonJarvis.onclick = initLab5$lambda_0;
    var buttonPolygonPoint = Kotlin.isType(tmp$_1 = document.getElementById('polygonPoint'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonPolygonPoint.onclick = initLab5$lambda_1;
    var buttonPolygonLine = Kotlin.isType(tmp$_2 = document.getElementById('polygonLine'), HTMLButtonElement) ? tmp$_2 : Kotlin.throwCCE();
    buttonPolygonLine.onclick = initLab5$lambda_2;
  }
  function checkPointInPolygon$lambda(closure$canvas, closure$context) {
    return function (it) {
      var tmp$;
      var pos = getMousePosOnCanvas(closure$canvas, it);
      if (pointInPolygon((tmp$ = Scene_getInstance().polygon) != null ? tmp$ : Kotlin.throwNPE(), pos)) {
        drawColorPixel(closure$context, pos.x, pos.y, 0, 255, 0);
      }
       else {
        drawColorPixel(closure$context, pos.x, pos.y, 255, 0, 0);
      }
    };
  }
  function checkPointInPolygon(elementId) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    canvas.onclick = checkPointInPolygon$lambda(canvas, context);
  }
  function findPointWithPolygon$lambda(closure$canvas, closure$points, closure$context) {
    return function (it) {
      var tmp$;
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$points.add_11rb$(pos);
      if (closure$points.size === 2) {
        drawBresenham(closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1), closure$canvas);
        var intersection = findPointsIntersectionsWithPolygon((tmp$ = Scene_getInstance().polygon) != null ? tmp$ : Kotlin.throwNPE(), closure$points.get_za3lpa$(0), closure$points.get_za3lpa$(1));
        var tmp$_0;
        tmp$_0 = intersection.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var closure$context_0 = closure$context;
          var x = element.component1()
          , y = element.component2();
          drawColorPixel(closure$context_0, x, y, 255, 0, 0);
        }
        closure$points.clear();
        closure$canvas.onclick = null;
      }
    };
  }
  function findPointWithPolygon(elementId) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = findPointWithPolygon$lambda(canvas, points, context);
  }
  function drawConvexHull$lambda(closure$canvas, closure$context, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      drawPixel(closure$context, pos.x, pos.y);
      return closure$points.add_11rb$(pos);
    };
  }
  function drawConvexHull$lambda_0(closure$points, closure$algorithm, closure$context, closure$canvas, closure$buttonStop) {
    return function (it) {
      var tmp$;
      console.log('click');
      if (closure$points.size > 2) {
        var convexHullPoints = closure$points;
        tmp$ = closure$algorithm;
        if (Kotlin.equals(tmp$, 'graham'))
          convexHullPoints = drawGraham(closure$points);
        else if (Kotlin.equals(tmp$, 'jarvis'))
          convexHullPoints = drawJarvis(closure$points);
        else {
          console.log('Not found algorithm ' + closure$algorithm);
        }
        var convexHull = new Polygon(ArrayList_init_0(convexHullPoints));
        Scene_getInstance().polygon = convexHull;
        render(closure$context);
      }
      closure$canvas.onclick = null;
      closure$buttonStop.disabled = true;
      closure$points.clear();
    };
  }
  function drawConvexHull(elementId, algorithm) {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawConvexHull$lambda(canvas, context, points);
    var buttonStop = Kotlin.isType(tmp$_1 = document.getElementById('\u0441onvex-hull-stop'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonStop.disabled = false;
    buttonStop.onclick = drawConvexHull$lambda_0(points, algorithm, context, canvas, buttonStop);
  }
  function polarAngle(p1, p2) {
    return Math.atan2(p1.y - p2.y | 0, p1.x - p2.x | 0);
  }
  function polarAngleR(p1, p2) {
    return Math.atan2(p1.y - p2.y | 0, p2.x - p1.x | 0);
  }
  function rotate(a, b, c) {
    return Kotlin.imul(b.x - a.x | 0, c.y - a.y | 0) - Kotlin.imul(b.y - a.y | 0, c.x - a.x | 0) | 0;
  }
  function drawGraham$lambda(it) {
    return it.y;
  }
  function drawGraham$lambda_0(closure$p) {
    return function (lhs, rhs) {
      var i1 = polarAngle(lhs, closure$p);
      var i2 = polarAngle(rhs, closure$p);
      if (i1 > i2)
        return 1;
      else if (i1 < i2)
        return -1;
      else
        return 0;
    };
  }
  function drawGraham(points) {
    var tmp$;
    if (points.size > 1) {
      Kotlin.kotlin.collections.sortWith_nqfjgj$(points, new Kotlin.kotlin.Comparator_x4fedy$$f(Kotlin.kotlin.comparisons.compareBy$f(drawGraham$lambda)));
    }
    var p = points.get_za3lpa$(0);
    sortWith(points, new Kotlin.kotlin.Comparator_x4fedy$$f(drawGraham$lambda_0(p)));
    var vertex = arrayListOf([points.get_za3lpa$(1), points.get_za3lpa$(0)]);
    tmp$ = points.size - 1 | 0;
    for (var i = 2; i <= tmp$; i++) {
      while (vertex.size > 1 && rotate(vertex.get_za3lpa$(1), vertex.get_za3lpa$(0), points.get_za3lpa$(i)) < 0) {
        vertex.removeAt_za3lpa$(0);
      }
      vertex.add_wxm5ur$(0, points.get_za3lpa$(i));
    }
    return vertex;
  }
  function drawJarvis$lambda(it) {
    return it.y;
  }
  function drawJarvis(points) {
    var tmp$, tmp$_0;
    if (points.size > 1) {
      Kotlin.kotlin.collections.sortWith_nqfjgj$(points, new Kotlin.kotlin.Comparator_x4fedy$$f(Kotlin.kotlin.comparisons.compareBy$f(drawJarvis$lambda)));
    }
    var p0 = first(points);
    var pk = last(points);
    var vertex = arrayListOf([p0]);
    var pushPoint;
    do {
      var tempPoints = ArrayList_init_0(points);
      tempPoints.removeAll_brywnq$(vertex);
      var maxBy$result;
      maxBy$break: do {
        var iterator = tempPoints.iterator();
        if (!iterator.hasNext()) {
          maxBy$result = null;
          break maxBy$break;
        }
        var maxElem = iterator.next();
        var maxValue = polarAngle(maxElem, last(vertex));
        while (iterator.hasNext()) {
          var e = iterator.next();
          var v = polarAngle(e, last(vertex));
          if (Kotlin.compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
        maxBy$result = maxElem;
      }
       while (false);
      pushPoint = (tmp$ = maxBy$result) != null ? tmp$ : Kotlin.throwNPE();
      vertex.add_11rb$(pushPoint);
    }
     while (!(pushPoint != null ? pushPoint.equals(pk) : null));
    do {
      var tempPoints_0 = ArrayList_init_0(points);
      tempPoints_0.removeAll_brywnq$(vertex);
      tempPoints_0.add_11rb$(p0);
      var minBy$result;
      minBy$break: do {
        var iterator_0 = tempPoints_0.iterator();
        if (!iterator_0.hasNext()) {
          minBy$result = null;
          break minBy$break;
        }
        var minElem = iterator_0.next();
        var minValue = polarAngleR(minElem, last(vertex));
        while (iterator_0.hasNext()) {
          var e_0 = iterator_0.next();
          var v_0 = polarAngleR(e_0, last(vertex));
          if (Kotlin.compareTo(minValue, v_0) > 0) {
            minElem = e_0;
            minValue = v_0;
          }
        }
        minBy$result = minElem;
      }
       while (false);
      pushPoint = (tmp$_0 = minBy$result) != null ? tmp$_0 : Kotlin.throwNPE();
      vertex.add_11rb$(pushPoint);
    }
     while (!(pushPoint != null ? pushPoint.equals(p0) : null));
    vertex.removeAt_za3lpa$(get_lastIndex(vertex));
    return vertex;
  }
  function drawPolygonByVertex(points, canvas) {
    console.log('Draw Polygon');
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = points.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      drawBresenham(points.get_za3lpa$(index_0), points.get_za3lpa$((index_0 + 1 | 0) % points.size), canvas);
    }
  }
  function isConvex(polygon) {
    var tmp$, tmp$_0;
    var vertex = polygon.points;
    var edges = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = vertex.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
      var v1 = vertex.get_za3lpa$(index_0);
      var v2 = vertex.get_za3lpa$((index_0 + 1 | 0) % vertex.size);
      edges.add_11rb$(new Pair(v1, v2));
    }
    var vectors = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_2;
    tmp$_2 = edges.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var first = element.component1()
      , second = element.component2();
      vectors.add_11rb$(new Pair(first.x - second.x | 0, first.y - second.y | 0));
    }
    var k = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_3, tmp$_0_1;
    var index_1 = 0;
    tmp$_3 = vectors.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      var index_2 = (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1);
      var v1_0 = vectors.get_za3lpa$(index_2);
      var v2_0 = vectors.get_za3lpa$((index_2 + 1 | 0) % vectors.size);
      k.add_11rb$(Kotlin.imul(v1_0.first, v2_0.second) - Kotlin.imul(v1_0.second, v2_0.first) | 0);
    }
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_4;
    tmp$_4 = k.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      if (element_0 >= 0)
        destination.add_11rb$(element_0);
    }
    var kB0 = destination;
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_5;
    tmp$_5 = k.iterator();
    while (tmp$_5.hasNext()) {
      var element_1 = tmp$_5.next();
      if (element_1 === 0)
        destination_0.add_11rb$(element_1);
    }
    var kE0 = destination_0;
    var destination_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_6;
    tmp$_6 = k.iterator();
    while (tmp$_6.hasNext()) {
      var element_2 = tmp$_6.next();
      if (element_2 <= 0)
        destination_1.add_11rb$(element_2);
    }
    var kL0 = destination_1;
    tmp$ = k.size;
    if (tmp$ === kB0.size) {
      console.log('Polygon is convex and the internal normals oriented to the left of its contour');
      tmp$_0 = true;
    }
     else if (tmp$ === kL0.size) {
      console.log('Polygon is convex and the internal normals oriented to the right of its contour');
      tmp$_0 = true;
    }
     else if (tmp$ === kE0.size) {
      console.log('Polygon is line segment');
      tmp$_0 = false;
    }
     else {
      console.log('Polygon is not convex');
      tmp$_0 = false;
    }
    return tmp$_0;
  }
  function findInternalNormals(polygon) {
    var vertex = polygon.points;
    var edges = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = vertex.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var v1 = vertex.get_za3lpa$(index_0);
      var v2 = vertex.get_za3lpa$((index_0 + 1 | 0) % vertex.size);
      edges.add_11rb$(new Pair(v1, v2));
    }
    var vectorsPerpendicular = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_1;
    tmp$_1 = edges.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var first = element.component1()
      , second = element.component2();
      vectorsPerpendicular.add_11rb$(new Pair(-(first.y - second.y | 0), first.x - second.x | 0));
    }
    var internalNormals = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_2, tmp$_0_0;
    var index_1 = 0;
    tmp$_2 = vertex.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      var index_2 = (tmp$_0_0 = index_1, index_1 = tmp$_0_0 + 1 | 0, tmp$_0_0);
      var v0 = vertex.get_za3lpa$(index_2);
      var v1_0 = vertex.get_za3lpa$((index_2 + 1 | 0) % vertex.size);
      var v2_0 = vertex.get_za3lpa$((index_2 + 2 | 0) % vertex.size);
      if (sign(Math, Kotlin.imul(-(v1_0.y - v0.y | 0), v2_0.x - v0.x | 0) + Kotlin.imul(v1_0.x - v0.x | 0, v2_0.y - v0.y | 0) | 0) === -1) {
        internalNormals.add_11rb$(vectorsPerpendicular.get_za3lpa$(index_2));
      }
       else {
        internalNormals.add_11rb$(new Pair(-1 * vectorsPerpendicular.get_za3lpa$(index_2).first | 0, -1 * vectorsPerpendicular.get_za3lpa$(index_2).second | 0));
      }
    }
    console.log('Internal Normals');
    var tmp$_3, tmp$_0_1;
    var index_3 = 0;
    tmp$_3 = internalNormals.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      var index_4 = (tmp$_0_1 = index_3, index_3 = tmp$_0_1 + 1 | 0, tmp$_0_1);
      var first_0 = item_1.component1()
      , second_0 = item_1.component2();
      var indexNext = (index_4 + 1 | 0) % vertex.size;
      console.log('V' + index_4 + '(' + vertex.get_za3lpa$(index_4).x + ';' + vertex.get_za3lpa$(index_4).y + ') V' + indexNext + '(' + vertex.get_za3lpa$(indexNext).x + ';' + vertex.get_za3lpa$(indexNext).y + ') - (' + first_0 + ';' + second_0 + ')');
    }
    return internalNormals;
  }
  function pointInPolygon(polygon, pos) {
    var tmp$;
    var vertex = polygon.points;
    var answer = 0;
    var index = 0;
    var prevIndex = vertex.size - 1 | 0;
    while (index < vertex.size) {
      var betweenY = vertex.get_za3lpa$(index).y <= pos.y && pos.y < vertex.get_za3lpa$(prevIndex).y || (vertex.get_za3lpa$(prevIndex).y <= pos.y && pos.y < vertex.get_za3lpa$(index).y);
      var equationLine = pos.x > ((Kotlin.imul(vertex.get_za3lpa$(prevIndex).x - vertex.get_za3lpa$(index).x | 0, pos.y - vertex.get_za3lpa$(index).y | 0) / (vertex.get_za3lpa$(prevIndex).y - vertex.get_za3lpa$(index).y | 0) | 0) + vertex.get_za3lpa$(index).x | 0);
      if (betweenY && equationLine) {
        answer = answer + 1 | 0;
      }
      prevIndex = (tmp$ = index, index = tmp$ + 1 | 0, tmp$);
    }
    return answer % 2 !== 0;
  }
  function findPointsIntersectionsWithPolygon(polygon, source, target) {
    var tmp$;
    var vertex = polygon.points;
    var x1 = source.x;
    var y1 = source.y;
    var x2 = target.x !== x1 ? target.x : x1 + 0.5;
    var y2 = target.y !== y1 ? target.y : y1 + 0.5;
    var index = 0;
    var prevIndex = vertex.size - 1 | 0;
    var answer = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    while (index < vertex.size) {
      var x3 = vertex.get_za3lpa$(index).x;
      var y3 = vertex.get_za3lpa$(index).y;
      var x4 = vertex.get_za3lpa$(prevIndex).x !== x3 ? vertex.get_za3lpa$(prevIndex).x : x3 + 0.5;
      var y4 = vertex.get_za3lpa$(prevIndex).y !== y3 ? vertex.get_za3lpa$(prevIndex).y : y3 + 0.5;
      var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      var betweenX = x3 <= x && x < x4 || (x4 <= x && x < x3);
      var betweenY = y3 <= y && y < y4 || (y4 <= y && y < y3);
      if (betweenX && betweenY)
        answer.add_11rb$(new Coordinate(x | 0, y | 0));
      prevIndex = (tmp$ = index, index = tmp$ + 1 | 0, tmp$);
    }
    return answer;
  }
  function initLab6$lambda(it) {
    coloring('canvas', 'seed');
  }
  function initLab6$lambda_0(it) {
    coloring('canvas', 'string-seed');
  }
  function initLab6() {
    var tmp$, tmp$_0;
    console.log('Init lab 6');
    var buttonSeed = Kotlin.isType(tmp$ = document.getElementById('seed'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonSeed.onclick = initLab6$lambda;
    var buttonStringSeed = Kotlin.isType(tmp$_0 = document.getElementById('string-seed'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonStringSeed.onclick = initLab6$lambda_0;
  }
  function coloring$lambda(closure$canvas, closure$algorithm) {
    return function (it) {
      var tmp$;
      var pos = getMousePosOnCanvas(closure$canvas, it);
      closure$canvas.onclick = null;
      tmp$ = closure$algorithm;
      if (Kotlin.equals(tmp$, 'seed'))
        seed(pos, closure$canvas);
      else if (Kotlin.equals(tmp$, 'string-seed'))
        stringSeed(pos, closure$canvas);
      else {
        console.log('Not found algorithm ' + closure$algorithm);
      }
    };
  }
  function coloring(elementId, algorithm) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    canvas.onclick = coloring$lambda(canvas, algorithm);
  }
  function seed$checkAndAdd(closure$context, closure$stack) {
    return function (x, y) {
      var availablePixel = until(0, Scene_getInstance().size).contains_mef7kx$(x) && until(0, Scene_getInstance().size).contains_mef7kx$(y);
      if (availablePixel && isWhitePixel(closure$context, x, y)) {
        push(closure$stack, new Coordinate(x, y));
      }
    };
  }
  function seed$waitLoop$lambda(closure$stack, closure$context, closure$checkAndAdd, closure$waitLoop) {
    return function () {
      var pixel = pop(closure$stack);
      drawColorPixel(closure$context, pixel.x, pixel.y, 255, 255, 0);
      closure$checkAndAdd(pixel.x + 1 | 0, pixel.y);
      closure$checkAndAdd(pixel.x, pixel.y - 1 | 0);
      closure$checkAndAdd(pixel.x - 1 | 0, pixel.y);
      closure$checkAndAdd(pixel.x, pixel.y + 1 | 0);
      if (!closure$stack.isEmpty()) {
        closure$waitLoop();
      }
    };
  }
  function seed$waitLoop(closure$stack, closure$context, closure$checkAndAdd) {
    return function closure$waitLoop() {
      window.setTimeout(seed$waitLoop$lambda(closure$stack, closure$context, closure$checkAndAdd, closure$waitLoop), 20);
    };
  }
  function seed(pos, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var stack = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    push(stack, pos);
    var checkAndAdd = seed$checkAndAdd(context, stack);
    var waitLoop = seed$waitLoop(stack, context, checkAndAdd);
    waitLoop();
  }
  function stringSeed$check(closure$context) {
    return function (x, y) {
      var availablePixel = until(0, Scene_getInstance().size).contains_mef7kx$(x) && until(0, Scene_getInstance().size).contains_mef7kx$(y);
      return availablePixel && isWhitePixel(closure$context, x, y);
    };
  }
  function stringSeed$pushPixelString(closure$check, closure$stack) {
    return function (xL, xR, y) {
      var xLeft = xL + 1 | 0;
      if (closure$check(xLeft, y)) {
        while (closure$check(xLeft, y)) {
          xLeft = xLeft - 1 | 0;
        }
      }
       else {
        while (closure$check(xLeft, y)) {
          xLeft = xLeft + 1 | 0;
        }
      }
      var xRight = xR - 1 | 0;
      if (closure$check(xRight, y)) {
        while (closure$check(xRight, y)) {
          xRight = xRight + 1 | 0;
        }
      }
       else {
        while (closure$check(xRight, y)) {
          xRight = xRight - 1 | 0;
        }
      }
      var x = xLeft + 1 | 0;
      while (x <= xRight) {
        if (closure$check(x, y)) {
          push(closure$stack, new Coordinate(x, y));
          do {
            x = x + 1 | 0;
          }
           while (x <= xRight && closure$check(x, y));
        }
         else {
          x = x + 1 | 0;
        }
      }
    };
  }
  function stringSeed$waitLoop$lambda(closure$stack, closure$check, closure$context, closure$pushPixelString, closure$waitLoop) {
    return function () {
      var pixel = pop(closure$stack);
      var xLeft = pixel.x - 1 | 0;
      while (closure$check(xLeft, pixel.y)) {
        xLeft = xLeft - 1 | 0;
      }
      var xRight = pixel.x + 1 | 0;
      while (closure$check(xRight, pixel.y)) {
        xRight = xRight + 1 | 0;
      }
      drawColorPixel(closure$context, xLeft + 1 | 0, pixel.y, 255, 255, 0, xRight - xLeft - 1 | 0);
      closure$pushPixelString(xLeft, xRight, pixel.y - 1 | 0);
      closure$pushPixelString(xLeft, xRight, pixel.y + 1 | 0);
      if (!closure$stack.isEmpty()) {
        closure$waitLoop();
      }
    };
  }
  function stringSeed$waitLoop(closure$stack, closure$check, closure$context, closure$pushPixelString) {
    return function closure$waitLoop() {
      window.setTimeout(stringSeed$waitLoop$lambda(closure$stack, closure$check, closure$context, closure$pushPixelString, closure$waitLoop), 20);
    };
  }
  function stringSeed(pos, canvas) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE();
    var stack = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    push(stack, pos);
    var check = stringSeed$check(context);
    var pushPixelString = stringSeed$pushPixelString(check, stack);
    var waitLoop = stringSeed$waitLoop(stack, check, context, pushPixelString);
    waitLoop();
  }
  function Window() {
    Window_instance = this;
    this.left = 50;
    this.right = 100;
    this.top = 100;
    this.bottom = 50;
  }
  Window.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Window',
    interfaces: []
  };
  var Window_instance = null;
  function Window_getInstance() {
    if (Window_instance === null) {
      new Window();
    }
    return Window_instance;
  }
  function Mask(point) {
    if (point === void 0)
      point = null;
    this.top = false;
    this.bottom = false;
    this.right = false;
    this.left = false;
    if (point != null) {
      this.top = point.y > Window_getInstance().top;
      this.bottom = point.y < Window_getInstance().bottom;
      this.right = point.x > Window_getInstance().right;
      this.left = point.x < Window_getInstance().left;
    }
     else {
      this.top = false;
      this.bottom = false;
      this.right = false;
      this.left = false;
    }
  }
  Mask.prototype.binaryAnd_isvkk2$ = function (second) {
    var mask = new Mask();
    mask.top = (this.top && second.top);
    mask.bottom = (this.bottom && second.bottom);
    mask.right = (this.right && second.right);
    mask.left = (this.left && second.left);
    return mask;
  };
  Mask.prototype.nulls = function () {
    return !(this.top || this.bottom || this.right || this.left);
  };
  Mask.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Mask',
    interfaces: []
  };
  function initLab7$lambda(it) {
    drawWindow('canvas');
  }
  function initLab7$lambda_0(it) {
    drawConvexHullWindow('canvas');
  }
  function initLab7() {
    var tmp$, tmp$_0;
    console.log('Init lab 7');
    var buttonClipping = Kotlin.isType(tmp$ = document.getElementById('clipping'), HTMLButtonElement) ? tmp$ : Kotlin.throwCCE();
    buttonClipping.onclick = initLab7$lambda;
    var buttonCyrusBeck = Kotlin.isType(tmp$_0 = document.getElementById('cyrus\u2014beck'), HTMLButtonElement) ? tmp$_0 : Kotlin.throwCCE();
    buttonCyrusBeck.onclick = initLab7$lambda_0;
  }
  function drawWindow(elementId) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var x = Window_getInstance().right - Window_getInstance().left | 0;
    var y = Window_getInstance().top - Window_getInstance().bottom | 0;
    context.clearRect(Window_getInstance().left, Window_getInstance().bottom, x, y);
    drawColorPixel(context, Window_getInstance().left, Window_getInstance().bottom, 0, 255, 0, x, 1.0);
    drawColorPixel(context, Window_getInstance().left, Window_getInstance().bottom, 0, 255, 0, 1.0, y);
    drawColorPixel(context, Window_getInstance().left, Window_getInstance().top, 0, 255, 0, x, 1.0);
    drawColorPixel(context, Window_getInstance().right, Window_getInstance().bottom, 0, 255, 0, 1.0, y + 1);
    context.fillStyle = 'rgba(0, 255, 0, 1)';
    clippingLines(canvas);
    context.fillStyle = 'rgba(0, 0, 0, 1)';
  }
  function drawConvexHullWindow$lambda(closure$canvas, closure$context, closure$points) {
    return function (it) {
      var pos = getMousePosOnCanvas(closure$canvas, it);
      drawPixel(closure$context, pos.x, pos.y);
      return closure$points.add_11rb$(pos);
    };
  }
  function drawConvexHullWindow$lambda_0(closure$points, closure$context, closure$canvas, closure$buttonStop) {
    return function (it) {
      console.log('click');
      if (closure$points.size > 2) {
        var convexHullPoints = drawGraham(closure$points);
        var convexHull = new Polygon(ArrayList_init_0(convexHullPoints));
        render(closure$context);
        closure$context.fillStyle = 'rgba(0, 255, 0, 1)';
        convexHull.draw_ap7jt0$(closure$canvas);
        clippingLinesInPolygon(closure$canvas, convexHull);
        closure$context.fillStyle = 'rgba(0, 0, 0, 1)';
      }
      closure$canvas.onclick = null;
      closure$buttonStop.disabled = true;
      closure$points.clear();
    };
  }
  function drawConvexHullWindow(elementId) {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    canvas.onclick = drawConvexHullWindow$lambda(canvas, context, points);
    var buttonStop = Kotlin.isType(tmp$_1 = document.getElementById('\u0441onvex-hull-window-stop'), HTMLButtonElement) ? tmp$_1 : Kotlin.throwCCE();
    buttonStop.disabled = false;
    buttonStop.onclick = drawConvexHullWindow$lambda_0(points, context, canvas, buttonStop);
  }
  function clippingLines(canvas) {
    var $receiver = Scene_getInstance().objects;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, LineForDraw))
        destination.add_11rb$(element);
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, LineForDraw) ? tmp$_1 : Kotlin.throwCCE());
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      clippingLineCohenSutherland(element_0, canvas);
    }
  }
  function clippingLineCohenSutherland(line, canvas) {
    var source = line.source;
    var target = line.target;
    var sourceMask = new Mask(source);
    var targetMask = new Mask(target);
    var mask = sourceMask.binaryAnd_isvkk2$(targetMask);
    if (mask.nulls()) {
      if (sourceMask.nulls() && targetMask.nulls()) {
        line.draw_ap7jt0$(canvas);
      }
       else {
        var m = (target.y - source.y | 0) / (target.x - source.x | 0);
        var left = new Coordinate(Window_getInstance().left, m * (Window_getInstance().left - source.x | 0) + source.y | 0);
        var right = new Coordinate(Window_getInstance().right, m * (Window_getInstance().right - source.x | 0) + source.y | 0);
        var bottom = new Coordinate(source.x + (Window_getInstance().bottom - source.y | 0) / m | 0, Window_getInstance().bottom);
        var top = new Coordinate(source.x + (Window_getInstance().top - source.y | 0) / m | 0, Window_getInstance().top);
        var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        if (sourceMask.nulls() || targetMask.nulls()) {
          var xMin = Math.min(source.x, target.x);
          var xMax = Math.max(source.x, target.x);
          var yMin = Math.min(source.y, target.y);
          var yMax = Math.max(source.y, target.y);
          if ((new IntRange(Window_getInstance().bottom, Window_getInstance().top)).contains_mef7kx$(left.y) && (new IntRange(yMin, yMax)).contains_mef7kx$(left.y) && (new IntRange(xMin, xMax)).contains_mef7kx$(Window_getInstance().left))
            push(points, left);
          if ((new IntRange(Window_getInstance().bottom, Window_getInstance().top)).contains_mef7kx$(right.y) && (new IntRange(yMin, yMax)).contains_mef7kx$(right.y) && (new IntRange(xMin, xMax)).contains_mef7kx$(Window_getInstance().right))
            push(points, right);
          if ((new IntRange(Window_getInstance().left, Window_getInstance().right)).contains_mef7kx$(bottom.x) && (new IntRange(xMin, xMax)).contains_mef7kx$(bottom.x) && (new IntRange(yMin, yMax)).contains_mef7kx$(Window_getInstance().bottom))
            push(points, bottom);
          if ((new IntRange(Window_getInstance().left, Window_getInstance().right)).contains_mef7kx$(top.x) && (new IntRange(xMin, xMax)).contains_mef7kx$(top.x) && (new IntRange(yMin, yMax)).contains_mef7kx$(Window_getInstance().top))
            push(points, top);
          if (sourceMask.nulls())
            push(points, source);
          else
            push(points, target);
        }
         else {
          if ((new IntRange(Window_getInstance().bottom, Window_getInstance().top)).contains_mef7kx$(left.y))
            push(points, left);
          if ((new IntRange(Window_getInstance().bottom, Window_getInstance().top)).contains_mef7kx$(right.y))
            push(points, right);
          if ((new IntRange(Window_getInstance().left, Window_getInstance().right)).contains_mef7kx$(bottom.x))
            push(points, bottom);
          if ((new IntRange(Window_getInstance().left, Window_getInstance().right)).contains_mef7kx$(top.x))
            push(points, top);
        }
        if (points.size >= 2)
          drawBresenham(points.get_za3lpa$(0), points.get_za3lpa$(1), canvas);
      }
    }
  }
  function clippingLinesInPolygon(canvas, polygon) {
    var $receiver = Scene_getInstance().objects;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, LineForDraw))
        destination.add_11rb$(element);
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = item, LineForDraw) ? tmp$_1 : Kotlin.throwCCE());
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      clippingLineCyrusBeck(element_0, canvas, polygon);
    }
  }
  function clippingLineCyrusBeck(line, canvas, polygon) {
    var source = line.source;
    var target = line.target;
    var d = new Pair(target.x - source.x | 0, target.y - source.y | 0);
    var vertex = polygon.points;
    var internalNormals = findInternalNormals(polygon);
    var tn = {v: 0.0};
    var tv = {v: 1.0};
    var visible = {v: true};
    var wnList = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var wnDnList = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = vertex.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var f = vertex.get_za3lpa$(index_0);
      var normal = internalNormals.get_za3lpa$(index_0);
      var w = new Pair(source.x - f.x | 0, source.y - f.y | 0);
      var wn = Kotlin.imul(w.first, normal.first) + Kotlin.imul(w.second, normal.second) | 0;
      var dn = Kotlin.imul(d.first, normal.first) + Kotlin.imul(d.second, normal.second) | 0;
      if (dn === 0) {
        if (wn < 0) {
          visible.v = false;
          return;
        }
      }
       else {
        var t = -(wn / dn);
        if (rangeTo(0.0, 1.0).contains_mef7kx$(t)) {
          if (dn < 0) {
            if (t < tv.v) {
              tv.v = t;
            }
            if (t < tn.v) {
              visible.v = false;
              return;
            }
          }
          if (dn > 0) {
            if (t > tn.v) {
              tn.v = t;
            }
            if (t > tv.v) {
              visible.v = false;
              return;
            }
          }
        }
         else {
          wnList.add_11rb$(wn);
          wnDnList.add_11rb$(wn + dn | 0);
        }
      }
    }
    if (vertex.size === wnList.size) {
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_1;
      tmp$_1 = wnList.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element > 0)
          destination.add_11rb$(element);
      }
      var gr0wn = destination;
      var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_2;
      tmp$_2 = wnDnList.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (element_0 > 0)
          destination_0.add_11rb$(element_0);
      }
      var gr0wnDn = destination_0;
      if (gr0wn.size === gr0wnDn.size && gr0wn.size === vertex.size) {
        drawBresenham(source, target, canvas);
      }
    }
     else if (visible.v && tn.v < tv.v) {
      var destination_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_3;
      tmp$_3 = wnList.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        if (element_1 < 0)
          destination_1.add_11rb$(element_1);
      }
      var sm0wn = destination_1;
      var destination_2 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_4;
      tmp$_4 = wnDnList.iterator();
      while (tmp$_4.hasNext()) {
        var element_2 = tmp$_4.next();
        if (element_2 < 0)
          destination_2.add_11rb$(element_2);
      }
      var sm0wnDn = destination_2;
      var tmp$_5 = !sm0wn.isEmpty();
      if (tmp$_5) {
        tmp$_5 = !sm0wnDn.isEmpty();
      }
      if (!tmp$_5) {
        var s = new Coordinate(source.x + (target.x - source.x | 0) * tn.v | 0, source.y + (target.y - source.y | 0) * tn.v | 0);
        var t_0 = new Coordinate(source.x + (target.x - source.x | 0) * tv.v | 0, source.y + (target.y - source.y | 0) * tv.v | 0);
        drawBresenham(s, t_0, canvas);
      }
    }
  }
  function initLab8$lambda(closure$fileInput, closure$canvas) {
    return function (it) {
      loadFilePlane(closure$fileInput, closure$canvas);
    };
  }
  function initLab8() {
    var tmp$, tmp$_0;
    console.log('Init lab 8');
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    var fileInput = Kotlin.isType(tmp$_0 = document.getElementById('file-with-plane'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    fileInput.addEventListener('change', initLab8$lambda(fileInput, canvas));
  }
  function loadFilePlane$lambda$lambda(closure$file, closure$reader, closure$canvas) {
    return function (event) {
      var tmp$, tmp$_0;
      console.log('Onload ' + closure$file.name);
      var object3dJson = JSON.parse(typeof (tmp$ = closure$reader.result) === 'string' ? tmp$ : Kotlin.throwCCE());
      var listOfPoinus = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var $receiver = object3dJson.points;
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        listOfPoinus.add_11rb$(new Coordinate4D(element[0], element[1], element[2], element[3]));
      }
      var listOfEdges = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var $receiver_0 = object3dJson.edges;
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
        var element_0 = $receiver_0[tmp$_2];
        listOfEdges.add_11rb$(new Edge(listOfPoinus.get_za3lpa$(element_0[0]), listOfPoinus.get_za3lpa$(element_0[1])));
      }
      var listOfEPlanes = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var $receiver_1 = object3dJson.planes;
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== $receiver_1.length; ++tmp$_3) {
        var element_1 = $receiver_1[tmp$_3];
        var edgeForPlane = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        var tmp$_4;
        for (tmp$_4 = 0; tmp$_4 !== element_1.length; ++tmp$_4) {
          var element_2 = element_1[tmp$_4];
          edgeForPlane.add_11rb$(listOfEdges.get_za3lpa$(element_2));
        }
        listOfEPlanes.add_11rb$(new Plane(edgeForPlane));
      }
      Scene_getInstance().object3D = new Object3DPlane(listOfPoinus, listOfEdges, listOfEPlanes);
      render(Kotlin.isType(tmp$_0 = closure$canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE());
    };
  }
  function loadFilePlane(input, canvas) {
    var tmp$;
    var file = (tmp$ = input.files) != null ? tmp$[0] : null;
    if (file != null) {
      console.log('Load ' + file.name);
      var reader = new FileReader();
      reader.onload = loadFilePlane$lambda$lambda(file, reader, canvas);
      reader.readAsText(file);
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
  function render($receiver) {
    var tmp$, tmp$_0;
    $receiver.clearRect(0.0, 0.0, Scene_getInstance().size, Scene_getInstance().size);
    var tmp$_1;
    tmp$_1 = Scene_getInstance().objects.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      element.draw_ap7jt0$($receiver.canvas);
    }
    (tmp$ = Scene_getInstance().object3D) != null ? tmp$.draw_ap7jt0$($receiver.canvas) : null;
    (tmp$_0 = Scene_getInstance().polygon) != null ? tmp$_0.draw_ap7jt0$($receiver.canvas) : null;
  }
  function drawPixel($receiver, x, y) {
    $receiver.fillRect(x, y, 1.0, 1.0);
  }
  function drawColorPixel($receiver, x, y, r, g, b, w, h) {
    if (w === void 0)
      w = 1.0;
    if (h === void 0)
      h = 1.0;
    $receiver.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
    $receiver.fillRect(x, y, w, h);
    $receiver.fillStyle = 'rgba(0, 0, 0, 1)';
  }
  function isWhitePixel($receiver, x, y) {
    var scaleX = x * Scene_getInstance().scale;
    var scaleY = y * Scene_getInstance().scale;
    var p = $receiver.getImageData(scaleX, scaleY, 1.0, 1.0).data;
    var tmp$ = p[3] === 0;
    if (tmp$) {
      tmp$ = p[2] === 0;
    }
    var tmp$_0 = tmp$;
    if (tmp$_0) {
      tmp$_0 = p[1] === 0;
    }
    var tmp$_1 = tmp$_0;
    if (tmp$_1) {
      tmp$_1 = p[0] === 0;
    }
    return tmp$_1;
  }
  function drawAlfaPixel($receiver, alfa, x, y, z, a) {
    if (z === void 0)
      z = 0;
    if (a === void 0)
      a = 0;
    $receiver.globalAlpha = alfa;
    $receiver.fillRect(x, y, 1.0, 1.0);
    $receiver.globalAlpha = 1.0;
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
  function push($receiver, element) {
    $receiver.add_wxm5ur$(0, element);
  }
  function pop($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  }
  function getMousePosOnCanvas(canvas, event) {
    var tmp$;
    var rect = canvas.getBoundingClientRect();
    var evt = Kotlin.isType(tmp$ = event, MouseEvent) ? tmp$ : Kotlin.throwCCE();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    return new Coordinate(x / Scene_getInstance().scale | 0, y / Scene_getInstance().scale | 0);
  }
  function ObjectForDraw() {
  }
  ObjectForDraw.prototype.draw_ap7jt0$ = function (canvas) {
  };
  ObjectForDraw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ObjectForDraw',
    interfaces: []
  };
  function LineForDraw(source, target) {
    ObjectForDraw.call(this);
    this.source_5wz98j$_0 = source;
    this.target_5wz98j$_0 = target;
  }
  Object.defineProperty(LineForDraw.prototype, 'source', {
    get: function () {
      return this.source_5wz98j$_0;
    }
  });
  Object.defineProperty(LineForDraw.prototype, 'target', {
    get: function () {
      return this.target_5wz98j$_0;
    }
  });
  LineForDraw.prototype.draw_ap7jt0$ = function (canvas) {
  };
  LineForDraw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineForDraw',
    interfaces: [ObjectForDraw]
  };
  function DDA(source, target) {
    LineForDraw.call(this, source, target);
    this.source_it1y6d$_0 = source;
    this.target_it1y6d$_0 = target;
  }
  Object.defineProperty(DDA.prototype, 'source', {
    get: function () {
      return this.source_it1y6d$_0;
    }
  });
  Object.defineProperty(DDA.prototype, 'target', {
    get: function () {
      return this.target_it1y6d$_0;
    }
  });
  DDA.prototype.draw_ap7jt0$ = function (canvas) {
    drawDDA(this.source, this.target, canvas);
  };
  DDA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DDA',
    interfaces: [LineForDraw]
  };
  function Bresenham(source, target) {
    LineForDraw.call(this, source, target);
    this.source_k0p767$_0 = source;
    this.target_k0p767$_0 = target;
  }
  Object.defineProperty(Bresenham.prototype, 'source', {
    get: function () {
      return this.source_k0p767$_0;
    }
  });
  Object.defineProperty(Bresenham.prototype, 'target', {
    get: function () {
      return this.target_k0p767$_0;
    }
  });
  Bresenham.prototype.draw_ap7jt0$ = function (canvas) {
    drawBresenham(this.source, this.target, canvas);
  };
  Bresenham.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bresenham',
    interfaces: [LineForDraw]
  };
  function Wu(source, target) {
    LineForDraw.call(this, source, target);
    this.source_ffl0nu$_0 = source;
    this.target_ffl0nu$_0 = target;
  }
  Object.defineProperty(Wu.prototype, 'source', {
    get: function () {
      return this.source_ffl0nu$_0;
    }
  });
  Object.defineProperty(Wu.prototype, 'target', {
    get: function () {
      return this.target_ffl0nu$_0;
    }
  });
  Wu.prototype.draw_ap7jt0$ = function (canvas) {
    drawWu(this.source, this.target, canvas);
  };
  Wu.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Wu',
    interfaces: [LineForDraw]
  };
  function Circle(center, radius) {
    ObjectForDraw.call(this);
    this.center = center;
    this.radius = radius;
  }
  Circle.prototype.draw_ap7jt0$ = function (canvas) {
    drawCircleAlgorithm(this.center, this.radius, canvas);
  };
  Circle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Circle',
    interfaces: [ObjectForDraw]
  };
  function Ellipse(center, a, b) {
    ObjectForDraw.call(this);
    this.center = center;
    this.a = a;
    this.b = b;
  }
  Ellipse.prototype.draw_ap7jt0$ = function (canvas) {
    drawEllipseAlgorithm(this.center, this.a, this.b, canvas);
  };
  Ellipse.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ellipse',
    interfaces: [ObjectForDraw]
  };
  function Hyperbola(center, a, b) {
    ObjectForDraw.call(this);
    this.center = center;
    this.a = a;
    this.b = b;
  }
  Hyperbola.prototype.draw_ap7jt0$ = function (canvas) {
    drawHyperbolaAlgorithm(this.center, this.a, this.b, canvas);
  };
  Hyperbola.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hyperbola',
    interfaces: [ObjectForDraw]
  };
  function Parabola(center, a) {
    ObjectForDraw.call(this);
    this.center = center;
    this.a = a;
  }
  Parabola.prototype.draw_ap7jt0$ = function (canvas) {
    drawParabolaAlgorithm(this.center, this.a, canvas);
  };
  Parabola.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Parabola',
    interfaces: [ObjectForDraw]
  };
  function Hermite(points) {
    ObjectForDraw.call(this);
    this.points = points;
  }
  Hermite.prototype.draw_ap7jt0$ = function (canvas) {
    var tmp$;
    drawHermite(this.points, Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  };
  Hermite.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hermite',
    interfaces: [ObjectForDraw]
  };
  function Bezier(points) {
    ObjectForDraw.call(this);
    this.points = points;
  }
  Bezier.prototype.draw_ap7jt0$ = function (canvas) {
    var tmp$;
    drawBezier(this.points, Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  };
  Bezier.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bezier',
    interfaces: [ObjectForDraw]
  };
  function BSpline(points) {
    ObjectForDraw.call(this);
    this.points = points;
  }
  BSpline.prototype.draw_ap7jt0$ = function (canvas) {
    var tmp$;
    drawBSpline(this.points, Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : Kotlin.throwCCE());
  };
  BSpline.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BSpline',
    interfaces: [ObjectForDraw]
  };
  function Polygon(points) {
    ObjectForDraw.call(this);
    this.points = points;
  }
  Polygon.prototype.draw_ap7jt0$ = function (canvas) {
    drawPolygonByVertex(this.points, canvas);
    if (isConvex(this)) {
      findInternalNormals(this);
    }
  };
  Polygon.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Polygon',
    interfaces: [ObjectForDraw]
  };
  function Object3D(points, edges) {
    ObjectForDraw.call(this);
    this.points_l1deum$_0 = points;
    this.edges_l1deum$_0 = edges;
    this.perspective = 10;
  }
  Object.defineProperty(Object3D.prototype, 'points', {
    get: function () {
      return this.points_l1deum$_0;
    }
  });
  Object.defineProperty(Object3D.prototype, 'edges', {
    get: function () {
      return this.edges_l1deum$_0;
    }
  });
  Object3D.prototype.draw_ap7jt0$ = function (canvas) {
    console.log('Draw object3D');
    var tmp$;
    tmp$ = this.edges.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var source = element.component1()
      , target = element.component2();
      var source2D = new Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w));
      var target2D = new Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w));
      drawBresenham(source2D, target2D, canvas);
    }
  };
  Object3D.prototype.getCentre = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
    var tmp$_17;
    if ((tmp$_0 = (tmp$ = Scene_getInstance().object3D) != null ? tmp$.points : null) != null) {
      var minBy$result;
      minBy$break: do {
        var iterator = tmp$_0.iterator();
        if (!iterator.hasNext()) {
          minBy$result = null;
          break minBy$break;
        }
        var minElem = iterator.next();
        var minValue = minElem.x;
        while (iterator.hasNext()) {
          var e = iterator.next();
          var v = e.x;
          if (Kotlin.compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
        minBy$result = minElem;
      }
       while (false);
      tmp$_17 = minBy$result;
    }
     else
      tmp$_17 = null;
    var minX = (tmp$_1 = tmp$_17) != null ? tmp$_1.x : null;
    var tmp$_18;
    if ((tmp$_3 = (tmp$_2 = Scene_getInstance().object3D) != null ? tmp$_2.points : null) != null) {
      var maxBy$result;
      maxBy$break: do {
        var iterator_0 = tmp$_3.iterator();
        if (!iterator_0.hasNext()) {
          maxBy$result = null;
          break maxBy$break;
        }
        var maxElem = iterator_0.next();
        var maxValue = maxElem.x;
        while (iterator_0.hasNext()) {
          var e_0 = iterator_0.next();
          var v_0 = e_0.x;
          if (Kotlin.compareTo(maxValue, v_0) < 0) {
            maxElem = e_0;
            maxValue = v_0;
          }
        }
        maxBy$result = maxElem;
      }
       while (false);
      tmp$_18 = maxBy$result;
    }
     else
      tmp$_18 = null;
    var maxX = (tmp$_4 = tmp$_18) != null ? tmp$_4.x : null;
    var tmp$_19;
    if ((tmp$_6 = (tmp$_5 = Scene_getInstance().object3D) != null ? tmp$_5.points : null) != null) {
      var minBy$result_0;
      minBy$break: do {
        var iterator_1 = tmp$_6.iterator();
        if (!iterator_1.hasNext()) {
          minBy$result_0 = null;
          break minBy$break;
        }
        var minElem_0 = iterator_1.next();
        var minValue_0 = minElem_0.y;
        while (iterator_1.hasNext()) {
          var e_1 = iterator_1.next();
          var v_1 = e_1.y;
          if (Kotlin.compareTo(minValue_0, v_1) > 0) {
            minElem_0 = e_1;
            minValue_0 = v_1;
          }
        }
        minBy$result_0 = minElem_0;
      }
       while (false);
      tmp$_19 = minBy$result_0;
    }
     else
      tmp$_19 = null;
    var minY = (tmp$_7 = tmp$_19) != null ? tmp$_7.y : null;
    var tmp$_20;
    if ((tmp$_9 = (tmp$_8 = Scene_getInstance().object3D) != null ? tmp$_8.points : null) != null) {
      var maxBy$result_0;
      maxBy$break: do {
        var iterator_2 = tmp$_9.iterator();
        if (!iterator_2.hasNext()) {
          maxBy$result_0 = null;
          break maxBy$break;
        }
        var maxElem_0 = iterator_2.next();
        var maxValue_0 = maxElem_0.y;
        while (iterator_2.hasNext()) {
          var e_2 = iterator_2.next();
          var v_2 = e_2.y;
          if (Kotlin.compareTo(maxValue_0, v_2) < 0) {
            maxElem_0 = e_2;
            maxValue_0 = v_2;
          }
        }
        maxBy$result_0 = maxElem_0;
      }
       while (false);
      tmp$_20 = maxBy$result_0;
    }
     else
      tmp$_20 = null;
    var maxY = (tmp$_10 = tmp$_20) != null ? tmp$_10.y : null;
    var tmp$_21;
    if ((tmp$_12 = (tmp$_11 = Scene_getInstance().object3D) != null ? tmp$_11.points : null) != null) {
      var minBy$result_1;
      minBy$break: do {
        var iterator_3 = tmp$_12.iterator();
        if (!iterator_3.hasNext()) {
          minBy$result_1 = null;
          break minBy$break;
        }
        var minElem_1 = iterator_3.next();
        var minValue_1 = minElem_1.z;
        while (iterator_3.hasNext()) {
          var e_3 = iterator_3.next();
          var v_3 = e_3.z;
          if (Kotlin.compareTo(minValue_1, v_3) > 0) {
            minElem_1 = e_3;
            minValue_1 = v_3;
          }
        }
        minBy$result_1 = minElem_1;
      }
       while (false);
      tmp$_21 = minBy$result_1;
    }
     else
      tmp$_21 = null;
    var minZ = (tmp$_13 = tmp$_21) != null ? tmp$_13.z : null;
    var tmp$_22;
    if ((tmp$_15 = (tmp$_14 = Scene_getInstance().object3D) != null ? tmp$_14.points : null) != null) {
      var maxBy$result_1;
      maxBy$break: do {
        var iterator_4 = tmp$_15.iterator();
        if (!iterator_4.hasNext()) {
          maxBy$result_1 = null;
          break maxBy$break;
        }
        var maxElem_1 = iterator_4.next();
        var maxValue_1 = maxElem_1.z;
        while (iterator_4.hasNext()) {
          var e_4 = iterator_4.next();
          var v_4 = e_4.z;
          if (Kotlin.compareTo(maxValue_1, v_4) < 0) {
            maxElem_1 = e_4;
            maxValue_1 = v_4;
          }
        }
        maxBy$result_1 = maxElem_1;
      }
       while (false);
      tmp$_22 = maxBy$result_1;
    }
     else
      tmp$_22 = null;
    var maxZ = (tmp$_16 = tmp$_22) != null ? tmp$_16.z : null;
    return new Coordinate4D(((maxX != null ? maxX : Kotlin.throwNPE()) + (minX != null ? minX : Kotlin.throwNPE())) / 2, ((maxY != null ? maxY : Kotlin.throwNPE()) + (minY != null ? minY : Kotlin.throwNPE())) / 2, ((maxZ != null ? maxZ : Kotlin.throwNPE()) + (minZ != null ? minZ : Kotlin.throwNPE())) / 2, 0.0);
  };
  Object3D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Object3D',
    interfaces: [ObjectForDraw]
  };
  function Object3DPlane(points, edges, planes) {
    Object3D.call(this, points, edges);
    this.points_5tebli$_0 = points;
    this.edges_5tebli$_0 = edges;
    this.planes = planes;
  }
  Object.defineProperty(Object3DPlane.prototype, 'points', {
    get: function () {
      return this.points_5tebli$_0;
    }
  });
  Object.defineProperty(Object3DPlane.prototype, 'edges', {
    get: function () {
      return this.edges_5tebli$_0;
    }
  });
  Object3DPlane.prototype.draw_ap7jt0$ = function (canvas) {
    console.log('Draw object3D');
    var cols = this.planes.size;
    var tmp$, tmp$_0;
    var list = ArrayList_init(Kotlin.imul(cols, 4));
    tmp$ = 4 - 1 | 0;
    for (var y = 0; y <= tmp$; y++) {
      tmp$_0 = cols - 1 | 0;
      for (var x_0 = 0; x_0 <= tmp$_0; x_0++) {
        var init$result;
        if (y === 0) {
          init$result = this.planes.get_za3lpa$(x_0).getA();
        }
         else if (y === 1) {
          init$result = this.planes.get_za3lpa$(x_0).getB();
        }
         else if (y === 2) {
          init$result = this.planes.get_za3lpa$(x_0).getC();
        }
         else if (y === 3) {
          init$result = this.planes.get_za3lpa$(x_0).getD();
        }
         else {
          console.log('Error get planes[' + x_0 + ',' + y + ']');
          init$result = 0.0;
        }
        list.add_11rb$(init$result);
      }
    }
    var v = new _.com.ichipsea.kotlin.matrix.ListMatrix(cols, 4, list);
    var centre = this.getCentre();
    var s = matrixOf(4, 1, [centre.x, centre.y, centre.z, 1.0]);
    var sv = x(s, v);
    var p = matrixOf(4, 1, [0, 0, -1, 0]);
    var pv = x(p, v);
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = this.planes.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
      if (pv.get_vux9f0$(index_0, 0) * sv.get_vux9f0$(index_0, 0) > 0) {
        var tmp$_2;
        tmp$_2 = item.edges.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          var source = element.component1()
          , target = element.component2();
          var tmp$_3, tmp$_4;
          var source2D = new Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w));
          var target2D = new Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w));
          (Kotlin.isType(tmp$_3 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_3 : Kotlin.throwCCE()).fillStyle = 'rgba(0, 255, 0, 1)';
          drawBresenham(source2D, target2D, canvas);
          (Kotlin.isType(tmp$_4 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_4 : Kotlin.throwCCE()).fillStyle = 'rgba(0, 0, 0, 1)';
        }
      }
    }
  };
  Object3DPlane.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Object3DPlane',
    interfaces: [Object3D]
  };
  function Edge(source, target) {
    this.source = source;
    this.target = target;
  }
  Edge.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  Edge.prototype.component1 = function () {
    return this.source;
  };
  Edge.prototype.component2 = function () {
    return this.target;
  };
  Edge.prototype.copy_x0hcgk$ = function (source, target) {
    return new Edge(source === void 0 ? this.source : source, target === void 0 ? this.target : target);
  };
  Edge.prototype.toString = function () {
    return 'Edge(source=' + Kotlin.toString(this.source) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  Edge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  Edge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.target, other.target)))));
  };
  function Coordinate4D(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Coordinate4D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Coordinate4D',
    interfaces: []
  };
  Coordinate4D.prototype.component1 = function () {
    return this.x;
  };
  Coordinate4D.prototype.component2 = function () {
    return this.y;
  };
  Coordinate4D.prototype.component3 = function () {
    return this.z;
  };
  Coordinate4D.prototype.component4 = function () {
    return this.w;
  };
  Coordinate4D.prototype.copy_6y0v78$ = function (x, y, z, w) {
    return new Coordinate4D(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Coordinate4D.prototype.toString = function () {
    return 'Coordinate4D(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + (', w=' + Kotlin.toString(this.w)) + ')';
  };
  Coordinate4D.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Coordinate4D.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function Object3dJSON(type, points, edges) {
    this.type = type;
    this.points = points;
    this.edges = edges;
  }
  Object3dJSON.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Object3dJSON',
    interfaces: []
  };
  Object3dJSON.prototype.component1 = function () {
    return this.type;
  };
  Object3dJSON.prototype.component2 = function () {
    return this.points;
  };
  Object3dJSON.prototype.component3 = function () {
    return this.edges;
  };
  Object3dJSON.prototype.copy_iulyte$ = function (type, points, edges) {
    return new Object3dJSON(type === void 0 ? this.type : type, points === void 0 ? this.points : points, edges === void 0 ? this.edges : edges);
  };
  Object3dJSON.prototype.toString = function () {
    return 'Object3dJSON(type=' + Kotlin.toString(this.type) + (', points=' + Kotlin.toString(this.points)) + (', edges=' + Kotlin.toString(this.edges)) + ')';
  };
  Object3dJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    return result;
  };
  Object3dJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.points, other.points) && Kotlin.equals(this.edges, other.edges)))));
  };
  function Object3dPlaneJSON(type, points, edges, planes) {
    this.type = type;
    this.points = points;
    this.edges = edges;
    this.planes = planes;
  }
  Object3dPlaneJSON.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Object3dPlaneJSON',
    interfaces: []
  };
  Object3dPlaneJSON.prototype.component1 = function () {
    return this.type;
  };
  Object3dPlaneJSON.prototype.component2 = function () {
    return this.points;
  };
  Object3dPlaneJSON.prototype.component3 = function () {
    return this.edges;
  };
  Object3dPlaneJSON.prototype.component4 = function () {
    return this.planes;
  };
  Object3dPlaneJSON.prototype.copy_4i4vhs$ = function (type, points, edges, planes) {
    return new Object3dPlaneJSON(type === void 0 ? this.type : type, points === void 0 ? this.points : points, edges === void 0 ? this.edges : edges, planes === void 0 ? this.planes : planes);
  };
  Object3dPlaneJSON.prototype.toString = function () {
    return 'Object3dPlaneJSON(type=' + Kotlin.toString(this.type) + (', points=' + Kotlin.toString(this.points)) + (', edges=' + Kotlin.toString(this.edges)) + (', planes=' + Kotlin.toString(this.planes)) + ')';
  };
  Object3dPlaneJSON.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    return result;
  };
  Object3dPlaneJSON.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.points, other.points) && Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.planes, other.planes)))));
  };
  function Plane(edges) {
    this.edges = edges;
  }
  Plane.prototype.getPoints = function () {
    var points = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = this.edges.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var source = element.component1()
      , target = element.component2();
      points.add_11rb$(source);
      points.add_11rb$(target);
    }
    return distinct(points);
  };
  Plane.prototype.getA = function () {
    var points = this.getPoints();
    var y1 = points.get_za3lpa$(0).y;
    var z1 = points.get_za3lpa$(0).z;
    var y2 = points.get_za3lpa$(1).y;
    var z2 = points.get_za3lpa$(1).z;
    var y3 = points.get_za3lpa$(2).y;
    var z3 = points.get_za3lpa$(2).z;
    return y1 * (z2 - z3) + y2 * (z3 - z1) + y3 * (z1 - z2);
  };
  Plane.prototype.getB = function () {
    var points = this.getPoints();
    var x1 = points.get_za3lpa$(0).x;
    var z1 = points.get_za3lpa$(0).z;
    var x2 = points.get_za3lpa$(1).x;
    var z2 = points.get_za3lpa$(1).z;
    var x3 = points.get_za3lpa$(2).x;
    var z3 = points.get_za3lpa$(2).z;
    return z1 * (x2 - x3) + z2 * (x3 - x1) + z3 * (x1 - x2);
  };
  Plane.prototype.getC = function () {
    var points = this.getPoints();
    var x1 = points.get_za3lpa$(0).x;
    var y1 = points.get_za3lpa$(0).y;
    var x2 = points.get_za3lpa$(1).x;
    var y2 = points.get_za3lpa$(1).y;
    var x3 = points.get_za3lpa$(2).x;
    var y3 = points.get_za3lpa$(2).y;
    return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
  };
  Plane.prototype.getD = function () {
    var points = this.getPoints();
    var x1 = points.get_za3lpa$(0).x;
    var y1 = points.get_za3lpa$(0).y;
    var z1 = points.get_za3lpa$(0).z;
    var x2 = points.get_za3lpa$(1).x;
    var y2 = points.get_za3lpa$(1).y;
    var z2 = points.get_za3lpa$(1).z;
    var x3 = points.get_za3lpa$(2).x;
    var y3 = points.get_za3lpa$(2).y;
    var z3 = points.get_za3lpa$(2).z;
    return -(x1 * (y2 * z3 - y3 * z2) + x2 * (y3 * z1 - y1 * z3) + x3 * (y1 * z2 - y2 * z1));
  };
  Plane.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Plane',
    interfaces: []
  };
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
  var package$giis = _.giis || (_.giis = {});
  Object.defineProperty(package$giis, 'Scene', {
    get: Scene_getInstance
  });
  package$giis.main_kand9s$ = main;
  package$giis.changeScale_rnuka6$ = changeScale;
  package$giis.init = init;
  package$giis.initLab1 = initLab1;
  package$giis.drawLine_puj7f4$ = drawLine;
  package$giis.drawDDA_lx35d4$ = drawDDA;
  package$giis.drawBresenham_lx35d4$ = drawBresenham;
  package$giis.drawWu_lx35d4$ = drawWu;
  package$giis.initLab2 = initLab2;
  package$giis.drawCircle_61zpoe$ = drawCircle;
  package$giis.drawEllipse_61zpoe$ = drawEllipse;
  package$giis.drawHyperbola_61zpoe$ = drawHyperbola;
  package$giis.drawParabola_61zpoe$ = drawParabola;
  package$giis.calcRadius_sc3ow8$ = calcRadius;
  package$giis.drawCirclePoints_s01kkh$ = drawCirclePoints;
  package$giis.drawEllipsePoints_s01kkh$ = drawEllipsePoints;
  package$giis.drawHyperbolaPoints_s01kkh$ = drawHyperbolaPoints;
  package$giis.drawParabolaPoints_s01kkh$ = drawParabolaPoints;
  package$giis.drawCircleAlgorithm_krfmak$ = drawCircleAlgorithm;
  package$giis.drawEllipseAlgorithm_jrt2a2$ = drawEllipseAlgorithm;
  package$giis.drawHyperbolaAlgorithm_jrt2a2$ = drawHyperbolaAlgorithm;
  package$giis.drawParabolaAlgorithm_krfmak$ = drawParabolaAlgorithm;
  package$giis.initLab3 = initLab3;
  package$giis.drawCurves_puj7f4$ = drawCurves;
  package$giis.drawCurvesPointsN_puj7f4$ = drawCurvesPointsN;
  package$giis.drawHermite_1ee4u1$ = drawHermite;
  package$giis.drawBezier_1ee4u1$ = drawBezier;
  package$giis.drawBSpline_1ee4u1$ = drawBSpline;
  package$giis.initLab4 = initLab4;
  package$giis.addKeyboardListener_ap7jt0$ = addKeyboardListener;
  package$giis.transformationMove_ap7jt0$ = transformationMove;
  package$giis.transformationMove_q9zq36$ = transformationMove_0;
  package$giis.transformationRotating_ap7jt0$ = transformationRotating;
  package$giis.transformationRotating_q9zq36$ = transformationRotating_0;
  package$giis.transformationScaling_ap7jt0$ = transformationScaling;
  package$giis.transformationScaling_js3y7m$ = transformationScaling_0;
  package$giis.transformationReflection_ap7jt0$ = transformationReflection;
  package$giis.transformationReflection_q9zq36$ = transformationReflection_0;
  package$giis.transformationPerspective_ap7jt0$ = transformationPerspective;
  package$giis.transformationPerspective_js3y7m$ = transformationPerspective_0;
  package$giis.getAxisNumber_61zpoe$ = getAxisNumber;
  package$giis.loadFile_vlz4k6$ = loadFile;
  package$giis.initLab5 = initLab5;
  package$giis.checkPointInPolygon_61zpoe$ = checkPointInPolygon;
  package$giis.findPointWithPolygon_61zpoe$ = findPointWithPolygon;
  package$giis.drawConvexHull_puj7f4$ = drawConvexHull;
  package$giis.polarAngle_sc3ow8$ = polarAngle;
  package$giis.polarAngleR_sc3ow8$ = polarAngleR;
  package$giis.rotate_a23y5m$ = rotate;
  package$giis.drawGraham_xyggwh$ = drawGraham;
  package$giis.drawJarvis_xyggwh$ = drawJarvis;
  package$giis.drawPolygonByVertex_e6f7nj$ = drawPolygonByVertex;
  package$giis.isConvex_58hs94$ = isConvex;
  package$giis.findInternalNormals_58hs94$ = findInternalNormals;
  package$giis.pointInPolygon_87nn3u$ = pointInPolygon;
  package$giis.findPointsIntersectionsWithPolygon_n826l0$ = findPointsIntersectionsWithPolygon;
  package$giis.initLab6 = initLab6;
  package$giis.coloring_puj7f4$ = coloring;
  package$giis.seed_awzpje$ = seed;
  package$giis.stringSeed_awzpje$ = stringSeed;
  Object.defineProperty(package$giis, 'Window', {
    get: Window_getInstance
  });
  package$giis.Mask = Mask;
  package$giis.initLab7 = initLab7;
  package$giis.drawWindow_61zpoe$ = drawWindow;
  package$giis.drawConvexHullWindow_61zpoe$ = drawConvexHullWindow;
  package$giis.clippingLines_ap7jt0$ = clippingLines;
  package$giis.clippingLineCohenSutherland_ltkm6x$ = clippingLineCohenSutherland;
  package$giis.clippingLinesInPolygon_r5ewew$ = clippingLinesInPolygon;
  package$giis.clippingLineCyrusBeck_v2fn8j$ = clippingLineCyrusBeck;
  package$giis.initLab8 = initLab8;
  package$giis.loadFilePlane_vlz4k6$ = loadFilePlane;
  package$giis.Coordinate = Coordinate;
  package$giis.Coordinates = Coordinates;
  package$giis.Color = Color;
  package$giis.render_qtrdl1$ = render;
  package$giis.drawPixel_jawqrd$ = drawPixel;
  package$giis.drawColorPixel_eat0sr$ = drawColorPixel;
  package$giis.isWhitePixel_jawqrd$ = isWhitePixel;
  package$giis.drawAlfaPixel_acjj6v$ = drawAlfaPixel;
  package$giis.sign_n5qjh5$ = sign;
  package$giis.abs_oyqxht$ = abs;
  package$giis.push_e4b52e$ = push;
  package$giis.pop_csi9pc$ = pop;
  package$giis.getMousePosOnCanvas_ma7i9a$ = getMousePosOnCanvas;
  package$giis.ObjectForDraw = ObjectForDraw;
  package$giis.LineForDraw = LineForDraw;
  package$giis.DDA = DDA;
  package$giis.Bresenham = Bresenham;
  package$giis.Wu = Wu;
  package$giis.Circle = Circle;
  package$giis.Ellipse = Ellipse;
  package$giis.Hyperbola = Hyperbola;
  package$giis.Parabola = Parabola;
  package$giis.Hermite = Hermite;
  package$giis.Bezier = Bezier;
  package$giis.BSpline = BSpline;
  package$giis.Polygon = Polygon;
  var package$object3d = package$giis.object3d || (package$giis.object3d = {});
  package$object3d.Object3D = Object3D;
  package$object3d.Object3DPlane = Object3DPlane;
  package$object3d.Edge = Edge;
  package$object3d.Coordinate4D = Coordinate4D;
  package$object3d.Object3dJSON = Object3dJSON;
  package$object3d.Object3dPlaneJSON = Object3dPlaneJSON;
  package$object3d.Plane = Plane;
  main([]);
  Kotlin.defineModule('giis-lab', _);
  return _;
}(typeof this['giis-lab'] === 'undefined' ? {} : this['giis-lab'], kotlin);

//# sourceMappingURL=giis-lab.js.map
