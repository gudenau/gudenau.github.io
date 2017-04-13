function squidSwim(selector) {
  if (!$.os.phone && !$.os.tablet) {
    var start = {
      y : [0, 0, 0, 0, 0, 0, 2.898550724637681, 2.898550724637681, 2.898550724637681, 2.898550724637681, 2.898550724637681, 2.898550724637681, 5.797101449275362, 5.797101449275362, 5.797101449275362, 5.797101449275362, 8.695652173913043, 8.695652173913043, 8.695652173913043, 11.594202898550725, 11.594202898550725, 11.594202898550725, 14.492753623188406, 14.492753623188406, 14.492753623188406, 17.391304347826086, 17.391304347826086, 20.28985507246377, 20.28985507246377, 23.18840579710145, 23.18840579710145, 26.08695652173913, 26.08695652173913, 28.985507246376812, 28.985507246376812, 31.884057971014492, 31.884057971014492, 34.78260869565217, 34.78260869565217, 37.68115942028985, 37.68115942028985, 40.57971014492754, 40.57971014492754, 43.47826086956522, 43.47826086956522, 46.3768115942029, 49.27536231884058, 49.27536231884058, 52.17391304347826, 52.17391304347826, 55.072463768115945, 55.072463768115945, 57.971014492753625, 60.869565217391305, 60.869565217391305, 63.768115942028984, 63.768115942028984, 66.66666666666667, 69.56521739130434, 69.56521739130434, 72.46376811594203, 72.46376811594203, 75.3623188405797, 75.3623188405797, 78.26086956521739, 81.15942028985508, 81.15942028985508, 84.05797101449275, 84.05797101449275, 86.95652173913044, 86.95652173913044, 89.85507246376811, 89.85507246376811, 92.7536231884058, 95.65217391304348, 95.65217391304348, 98.55072463768116, 98.55072463768116, 101.44927536231884, 101.44927536231884, 101.44927536231884, 104.34782608695652, 104.34782608695652, 107.2463768115942, 107.2463768115942, 110.14492753623189, 110.14492753623189, 110.14492753623189, 113.04347826086956, 113.04347826086956, 115.94202898550725, 115.94202898550725, 115.94202898550725, 118.84057971014492, 118.84057971014492, 118.84057971014492, 118.84057971014492, 121.73913043478261, 121.73913043478261, 121.73913043478261, 121.73913043478261, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203, 124.6376811594203],
      x : [-3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.647887323943662, -3.619718309859155, -3.619718309859155, -3.591549295774648, -3.563380281690141, -3.535211267605634, -3.47887323943662, -3.4225352112676055, -3.3943661971830985, -3.3098591549295775, -3.2535211267605635, -3.169014084507042, -3.112676056338028, -3.028169014084507, -2.943661971830986, -2.859154929577465, -2.7464788732394365, -2.6619718309859155, -2.549295774647887, -2.436619718309859, -2.352112676056338, -2.23943661971831, -2.098591549295775, -1.9859154929577465, -1.8732394366197183, -1.76056338028169, -1.619718309859155, -1.4788732394366195, -1.3661971830985915, -1.2253521126760565, -1.084507042253521, -0.943661971830986, -0.8028169014084505, -0.6619718309859155, -0.52112676056338, -0.380281690140845, -0.21126760563380298, -0.07042253521126751, 0.07042253521126751, 0.21126760563380298, 0.352112676056338, 0.492957746478873, 0.6338028169014089, 0.774647887323944, 0.915492957746479, 1.028169014084507, 1.169014084507042, 1.309859154929578, 1.450704225352113, 1.563380281690141, 1.704225352112676, 1.816901408450704, 1.929577464788733, 2.070422535211268, 2.183098591549296, 2.295774647887324, 2.408450704225352, 2.52112676056338, 2.605633802816902, 2.71830985915493, 2.802816901408451, 2.887323943661972, 2.971830985915493, 3.056338028169014, 3.140845070422535, 3.225352112676056, 3.281690140845071, 3.338028169014085, 3.394366197183099, 3.450704225352113, 3.507042253521127, 3.535211267605634, 3.563380281690141, 3.591549295774648, 3.619718309859155, 3.647887323943662, 3.647887323943662, 3.647887323943662],
      rotate : [-1.1781609195402298, -1.1781609195402298, -1.1781609195402298, -1.1781609195402298, -1.1781609195402298, -1.1666666666666665, -1.1666666666666665, -1.1551724137931034, -1.14367816091954, -1.14367816091954, -1.132183908045977, -1.1206896551724137, -1.1091954022988506, -1.0977011494252873, -1.0747126436781609, -1.0632183908045976, -1.0402298850574712, -1.028735632183908, -1.0172413793103448, -0.9942528735632183, -0.9712643678160919, -0.9597701149425286, -0.9367816091954022, -0.9137931034482758, -0.8908045977011494, -0.867816091954023, -0.8448275862068966, -0.82183908045977, -0.7988505747126436, -0.7758620689655171, -0.7528735632183907, -0.7183908045977011, -0.6954022988505747, -0.6724137931034482, -0.6379310344827586, -0.6149425287356322, -0.5804597701149425, -0.557471264367816, -0.5229885057471264, -0.5, -0.4655172413793103, -0.43103448275862066, -0.40804597701149425, -0.37356321839080453, -0.3505747126436781, -0.3160919540229885, -0.2816091954022988, -0.24712643678160917, -0.22413793103448276, -0.18965517241379304, -0.15517241379310343, -0.1206896551724137, -0.0862068965517242, -0.06321839080459757, -0.028735632183908066, 0.005747126436781658, 0.04022988505747138, 0.07471264367816088, 0.09770114942528729, 0.13218390804597702, 0.16666666666666674, 0.20114942528735646, 0.22413793103448287, 0.2586206896551724, 0.2931034482758621, 0.3275862068965518, 0.35057471264367823, 0.38505747126436773, 0.41954022988505746, 0.44252873563218387, 0.4770114942528736, 0.5, 0.5344827586206897, 0.5574712643678161, 0.5919540229885059, 0.6149425287356323, 0.6494252873563218, 0.6724137931034484, 0.6954022988505748, 0.7298850574712643, 0.7528735632183907, 0.7758620689655173, 0.7988505747126438, 0.8218390804597702, 0.8448275862068968, 0.867816091954023, 0.8908045977011496, 0.9137931034482758, 0.9367816091954024, 0.9482758620689657, 0.9712643678160919, 0.9942528735632186, 1.0057471264367814, 1.028735632183908, 1.0402298850574714, 1.0517241379310347, 1.0747126436781609, 1.0862068965517242, 1.0977011494252875, 1.1091954022988504, 1.1206896551724137, 1.132183908045977, 1.1436781609195403, 1.1436781609195403, 1.1551724137931036, 1.1551724137931036, 1.1666666666666665, 1.1666666666666665, 1.1666666666666665, 1.1666666666666665, 1.1781609195402298]
    };
    var elem = $(selector);
    var list = [];
    var cw = 100;
    var height = 100;
    var a = 0;
    var offx = 64;
    var y = 64;
    var zoom = 18;
    var round = function(m, value) {
      var h = (m.length - 1) * value;
      var i = parseInt(h);
      var f = h - i;
      return m[i] * (1 - f) + m[i + 1] * f;
    };
    var update = function() {
      if (a % 60 == 0) {
        var img = $(document.createElement("div"));
        img.attr("class", "IkaAnime-common IkaAnime_00");
        elem.append(img);
        list.push({
          base_x : Math.random() * (cw - offx),
          x : 0,
          invert_x : false,
          base_y : height,
          y : 0,
          rotate : 0,
          scale : 1 - Math.random() / 3,
          reverse_rotate : false,
          image_frame : 0,
          total_frame : 0,
          image : img
        });
      }
      var pos = list.length - 1;
      for (;pos >= 0;pos--) {
        var p = list[pos];
        var udataCur = p.image_frame / zoom;
        p.x = p.base_x + round(start.x, udataCur) * (p.invert_x ? -1 : 1);
        p.y = p.base_y - round(start.y, udataCur);
        p.rotate = round(start.rotate, p.reverse_rotate ? 1 - udataCur : udataCur);
        p.image_frame += 0.5;
        if (p.image_frame >= zoom) {
          p.image_frame = 0;
          p.base_y = p.y;
          p.invert_x = !p.invert_x;
          p.reverse_rotate = !p.reverse_rotate;
        }
        if (p.y + y * p.scale * 2 <= 0) {
          p.image.remove();
          list.splice(pos, 1);
        }
      }
      a++;
    };
    var render = function() {
      var i = 0;
      for (;i < list.length;i++) {
        var c = list[i];
        var meterPos = "translate(" + c.x + "px," + c.y + "px) rotate(" + c.rotate + "deg) scale(" + c.scale + ")";
        c.image.css("transform", meterPos);
        c.image.css("-webkit-transform", meterPos);
        c.image.attr("class", "IkaAnime-common IkaAnime_" + ("0" + parseInt(c.image_frame)).slice(-2));
      }
    };
    var main = function() {
      update();
      render();
    };
    var onResize = function() {
      height = document.documentElement.clientHeight;
      cw = document.documentElement.clientWidth;
      elem.css("height", height + "px");
      elem.css("width", cw + "px");
    };
    var scrollIntervalId = -1;
    var m = 0;
    var hasFocus = document.body;
    var resize = function() {
      return 0 == m ? void m++ : ($(document).off("page:change", resize), $(window).off("resize", onResize), scrollIntervalId >= 0 && (clearInterval(scrollIntervalId), scrollIntervalId = -1), $(document).on("page:restore", b), void m++);
    };
    var init = function() {
      if (hasFocus == document.body) {
        $(document).off("page:restore", init);
        $(window).on("resize", onResize);
        $(document).on("page:change", resize);
        m = 0;
        onResize();
        render();
        scrollIntervalId = setInterval(main, 16);
      }
    };
    init();
  }
}
;