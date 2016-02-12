$(function() {
  $(".dialVol").knob({
    change: function (value) {
      noeudAct = this.$.attr('id').substr(0, 1),
      effet1v200.setValue("/0x00/" + "Vol" + noeudAct, value);
      console.log("Vol" + noeudAct + " " + parseInt(value));
      this.$.attr('value', value);
      },
          'min':0,
          'max':100,
          'angleArc':270,
          'angleOffset':-180,
          'bgColor': 'rgba(255, 255, 255, 0.3)',
          'fgColor': 'rgba(255, 255, 255, 0.8)',
          'width': "100%"
  });
  $(".dialEf").knob({
    change: function (value) {
      noeudAct = this.$.attr('id').substr(0, 1),
      buttonAct = this.$.attr('id').substr(1, 1);

      effet1v200.setValue(effet[buttonAct] + "Vol" + noeudAct, value);
      console.log("/0x00/" + effet[buttonAct] + "Vol" + noeudAct + " " + parseInt(value));
      this.$.attr('value', value);
      },
          'min':0,
          'max':100,
          'angleArc':320,
          'angleOffset':-160,
          'bgColor': 'rgba(255, 255, 255, 0.3)',
          'fgColor': 'rgba(255, 255, 255, 0.8)',
          'width': "100%"
  });
});
