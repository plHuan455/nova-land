import { OptionType } from 'components/molecules/Pulldown';
import { FilterGroupProps } from 'components/organisms/FilterGroup';

const dataFilterList: FilterGroupProps[] = [
  {
    title: 'Bộ phận',
    dataFilterGroup: [
      {
        id: '1',
        name: 'tatca',
        content: 'Tất cả',
      },
      {
        id: '2',
        name: 'kythuat',
        content: 'Kỹ thuật',
      },
      {
        id: '3',
        name: 'kehoachduan',
        content: 'Kế hoạch Dự án',
      },
      {
        id: '4',
        name: 'thietke',
        content: 'Thiết kế',
      },
      {
        id: '5',
        name: 'kinhdoanh&banhang',
        content: 'Kinh doanh & Bán hàng',
      },
      {
        id: '6',
        name: 'marketing',
        content: 'Marketing',
      },
    ],
  },
  {
    title: 'Vị trí làm việc',
    dataFilterGroup: [
      {
        id: '1',
        name: 'chuyenvien',
        content: 'Chuyên viên',
      },
      {
        id: '2',
        name: 'chuyenviencaocap',
        content: 'Chuyên viên cao cấp',
      },
      {
        id: '3',
        name: 'truongphong',
        content: 'Trưởng phòng',
      },
      {
        id: '4',
        name: 'giamdoc',
        content: 'Giám đốc',
      },
    ],
  },
  {
    title: 'Lĩnh vực công việc',
    dataFilterGroup: [
      {
        id: '1',
        name: 'phattriennhantai',
        content: 'Phát triển Nhân tài',
      },
      {
        id: '2',
        name: 'ketoan',
        content: 'Kế toán',
      },
      {
        id: '3',
        name: 'dauthauxaydung',
        content: 'Đấu thầu xây dựng',
      },
      {
        id: '4',
        name: 'dieuhanhduan',
        content: 'Điều hành dự án',
      },
      {
        id: '5',
        name: 'thietkehatang',
        content: 'Thiết kế Hạ tầng',
      },
      {
        id: '6',
        name: 'quangbathuonghieu',
        content: 'Quảng bá Thương hiệu',
      },
      {
        id: '7',
        name: 'phattrientochuc',
        content: 'Phát triển Tổ chức',
      },
    ],
  },
  {
    title: 'Địa điểm làm việc',
    dataFilterGroup: [
      {
        id: '1',
        name: 'hcm',
        content: 'TP.HCM',
      },
      {
        id: '2',
        name: 'lamdong',
        content: 'Lâm Đồng',
      },
      {
        id: '3',
        name: 'phanthiet',
        content: 'Phan Thiết',
      },
      {
        id: '4',
        name: 'vungtau',
        content: 'Vũng Tàu',
      },
    ],
  },
  {
    title: 'Hình thức làm việc',
    dataFilterGroup: [
      {
        id: '1',
        name: 'toanthoigian',
        content: 'Toàn thời gian',
      },
      {
        id: '2',
        name: 'banthoigian',
        content: 'Bán thời gian',
      },
      {
        id: '3',
        name: 'thuctap',
        content: 'Thực tập',
      },
    ],
  },
];

export const positionFilterRecruitOptions: OptionType[] = [
  {
    label: 'Chuyên viên',
    value: '1',
  },
  {
    label: 'Trợ lý',
    value: '2',
  },
  {
    label: 'Nhân viên',
    value: '3',
  },
  {
    label: 'Marketing',
    value: '4',
  },
  {
    label: 'Tư vấn',
    value: '5',
  },
];
export const locationFilterRecruitOptions: OptionType[] = [
  {
    label: 'Hà Nội',
    value: '1',
  },
  {
    label: 'Hồ Chí Minh',
    value: '2',
  },
  {
    label: 'Đà Nẵng',
    value: '3',
  },
  {
    label: 'Hải Phòng',
    value: '4',
  },
  {
    label: 'Bình Thuận',
    value: '5',
  },
];
export const departmentFilterRecruitOptions: OptionType[] = [
  {
    label: 'Kỹ thuật viên',
    value: '1',
  },
  {
    label: 'Lao công',
    value: '2',
  },
  {
    label: 'Lao công 2',
    value: '3',
  },
  {
    label: 'Chuyên viên',
    value: '4',
  },
  {
    label: 'Hành chính - Văn phòng',
    value: '5',
  },
];

export default dataFilterList;
