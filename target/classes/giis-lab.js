if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'giis-lab'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'giis-lab'.");
}
this['giis-lab'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
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
    this.array[x][y][z][a] = t;
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
  $$importsForInline$$['giis-lab'] = _;
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
