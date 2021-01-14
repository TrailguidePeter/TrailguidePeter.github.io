// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Hochschelpen West",
    positions: Cesium.Cartesian3.fromDegreesArray([
      10.102747,  47.462466,
      10.101586,	47.460028,
      10.097852,	47.457925,
      10.097509,	47.454152,
      10.097809,	47.449799,
      10.098238,	47.448116,
      10.098796,	47.446665,
      10.10195,	47.445199,
      10.103088,	47.444024,
      10.105233,	47.442355,
      10.106542,	47.441078,
      10.107164,	47.438625,
      10.107551,	47.437246,
      10.10916,	47.435722,
      10.109593,	47.434314,
      10.108885,	47.434823,
      10.107705,	47.436013,
      10.106244,	47.436796,
      10.104226,	47.437464,
      10.101941,	47.43774,
      10.098668,	47.437682,
      10.097219,	47.437769,
      10.09646,	47.438915,
      10.094979,	47.440672,
      10.095065,	47.443153,
      10.095688,	47.444227,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(42, 65, 212, 220),
      outlineWidth: 1,
      outlineColor: Cesium.Color.fromBytes(42, 65, 212, 220),
    }),
  },
});
