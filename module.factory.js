var Factory = function(Schema, mongoose) {

  this.Schema = Schema;
  this.mongoose = mongoose;
  this.Item = null;

  this.createSchemas = function() {
    MeasurementSchema = new this.Schema({
      name: String,
      metricSource: String,
      metricType: String,
      value: String
    });
    this.Measurement = mongoose.model('Measurement', MeasurementSchema);
  }

  this.insertMeasurements = function() {

    var test = new this.Measurement({
      name: 'test',
      metricSource: 'SonarQube',
      metricType: 'NCLOC',
      value: '12121'
    });

    var test2 = new this.Measurement({
      name: 'test2',
      metricSource: 'Jira',
      metricType: 'Number of bugs',
      value: '121'
    });

    test.save();
    test2.save();
  }

  this.getMeasurement = function(query, res) {

    this.Measurement.find(query,function(error, output) {
      res.json(output);
    });
  }
}

module.exports = Factory;
