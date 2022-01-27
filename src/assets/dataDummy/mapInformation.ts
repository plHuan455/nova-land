import { TypeMapMarker } from 'components/templates/MapInformation';

const dataMapInformation: TypeMapMarker[] = [
  {
    lat: 10.781241219776518,
    lng: 106.7415968021698,
    dataMarker: {
      title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA',
      dataCard: [
        {
          branchName: 'Tòa nhà văn phòng Novaland',
          informationDetail: {
            iconLocation: 'location',
            location: '65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
            iconEmail: 'email',
            email: 'info@novaland.com.vn',
            iconPhone: 'phoneContact',
            phone: 'CSKH: 1900 63 6666',
          },
        },
        {
          branchName: 'Novaland gallery',
          informationDetail: {
            iconLocation: 'location',
            location: '2Bis Nguyễn Thị Minh Khai, P.Đa Kao, Q.1, TP.HCM',
            iconPhone: 'phone',
            phone: '+(84) 906 353 838',
          },
        },
      ],
      nameBtn: 'Tìm gallery gần nhất',
      targetBtn: '_blank',
      href: '/',
    },
  },
  {
    lat: 10.758075532609162,
    lng: 106.69526333776476,
    dataMarker: {
      title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA 2',
      dataCard: [
        {
          branchName: 'Tòa nhà văn phòng Novaland 2',
          informationDetail: {
            iconLocation: 'location',
            location: '65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
            iconEmail: 'email',
            email: 'info@novaland.com.vn',
            iconPhone: 'phoneContact',
            phone: 'CSKH: 1900 63 6666',
          },
        },
      ],
      nameBtn: 'Tìm gallery gần nhất',
      targetBtn: '_blank',
      href: '/',
    },
  },
];

export default dataMapInformation;
