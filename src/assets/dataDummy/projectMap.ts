import branch1 from 'assets/images/ProjectMap/branch_1.png';
import branch2 from 'assets/images/ProjectMap/branch_2.png';
import branch3 from 'assets/images/ProjectMap/branch_3.png';
import branch4 from 'assets/images/ProjectMap/branch_4.png';

const list1 = [
  {
    id: 1,
    point: {
      x: 281,
      y: 483,
    },
    reference: {
      images: branch1,
    },
  },
  {
    id: 2,
    point: {
      x: 255,
      y: 498,
    },
    reference: {
      images: branch2,
    },
  },
  {
    id: 3,
    point: {
      x: 278,
      y: 520,
    },
    reference: {
      images: branch3,
    },
  },
  {
    id: 4,
    point: {
      x: 243,
      y: 534,
    },
    reference: {
      images: branch4,
    },
  },
  {
    id: 5,
    point: {
      x: 210,
      y: 550,
    },
    reference: {
      images: branch1,
    },
  },
];

const list2 = [
  {
    id: 1,
    point: {
      x: 100,
      y: 100,
    },
    reference: {
      images: branch1,
    },
  },
  {
    id: 2,
    point: {
      x: 150,
      y: 130,
    },
    reference: {
      images: branch2,
    },
  },
  {
    id: 3,
    point: {
      x: 150,
      y: 180,
    },
    reference: {
      images: branch3,
    },
  },
];

const list3 = [
  {
    id: 1,
    point: {
      x: 261,
      y: 353,
    },
    reference: {
      images: branch1,
    },
  },
];

const listProjectMap = [
  {
    id: 1,
    title: 'Bất Động Sản Trung Tâm',
    listPoint: list1,
  },
  {
    id: 2,
    title: 'Đô Thị Nghỉ Dưỡng',
    listPoint: list2,
  },
  {
    id: 3,
    title: 'Đô Thị Vệ Tinh',
    listPoint: list3,
  },
];

export default listProjectMap;
