import ISample from '../../../interfaces/ISample';

export const emptySamplePointMock: ISample[] = [{
  name: '',
  xCoordinate: 70.54,
  yCoordinate: -40.24,
}];

export const samplePointMock: ISample = {
  // id: 1,
  name: 'ponto teste',
  xCoordinate: 70.54,
  yCoordinate: -40.24,
};

export const samplePointsMock: ISample[] = [{
  // id: 1,
  name: 'ponto 1',
  xCoordinate: 70.54,
  yCoordinate: -40.24,
},
{
  // id: 2,
  name: 'ponto 2',
  xCoordinate: 30.54,
  yCoordinate: -10.24,
}];

export const completeSamplePointsMock: ISample[] = [{
  name: 'ponto teste',
  xCoordinate: 70.54,
  yCoordinate: -40.24,
},
{
  name: 'ponto 1',
  xCoordinate: 70.54,
  yCoordinate: -40.24,
},
{
  name: 'ponto 2',
  xCoordinate: 30.54,
  yCoordinate: -10.24,
}];
