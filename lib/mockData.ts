export type University = {
  id: string;
  name: string;
  shortName: string;
  location: string;
  type: string;
  majorsCount: number;
  ranking: number;
  rating: number;
  color: string;
  icon: string;
}

export type Major = {
  id: string;
  name: string;
  schoolId: string;
  schoolName: string;
  examGroups: string[];
  score: number;
  tuitionFee: number; // in million VND/year
  demand: number;
  salary: string;
  views: number;
  color: string;
  icon: string;
  duration: number; // in years
  students: number;
  category: string;
}

export const mockUniversities: University[] = [
  {
    id: 'DUT',
    name: 'Đại học Bách khoa - Đại học Đà Nẵng',
    shortName: 'DUT',
    location: 'Đà Nẵng',
    type: 'Công lập',
    majorsCount: 42,
    ranking: 1,
    rating: 4.8,
    color: 'bg-red-600',
    icon: '⚙️',
  },
  {
    id: 'DUE',
    name: 'Đại học Kinh tế - Đại học Đà Nẵng',
    shortName: 'DUE',
    location: 'Đà Nẵng',
    type: 'Công lập',
    majorsCount: 35,
    ranking: 2,
    rating: 4.7,
    color: 'bg-green-600',
    icon: '💼',
  },
  {
    id: 'UFLS',
    name: 'Đại học Ngoại ngữ - Đại học Đà Nẵng',
    shortName: 'UFLS',
    location: 'Đà Nẵng',
    type: 'Công lập',
    majorsCount: 22,
    ranking: 3,
    rating: 4.6,
    color: 'bg-blue-600',
    icon: '🌍',
  },
  {
    id: 'UED',
    name: 'Đại học Sư phạm - Đại học Đà Nẵng',
    shortName: 'UED',
    location: 'Đà Nẵng',
    type: 'Công lập',
    majorsCount: 45,
    ranking: 4,
    rating: 4.5,
    color: 'bg-purple-600',
    icon: '👩‍🏫',
  },
  {
    id: 'DTU',
    name: 'Đại học Duy Tân',
    shortName: 'DTU',
    location: 'Đà Nẵng',
    type: 'Tư thục',
    majorsCount: 50,
    ranking: 5,
    rating: 4.4,
    color: 'bg-orange-600',
    icon: '🏫',
  },
  {
    id: 'FPT',
    name: 'Đại học FPT Đà Nẵng',
    shortName: 'FPT',
    location: 'Đà Nẵng',
    type: 'Tư thục',
    majorsCount: 15,
    ranking: 6,
    rating: 4.6,
    color: 'bg-orange-500',
    icon: '💻',
  },
]

export const mockMajors: Major[] = [
  {
    id: '1',
    name: 'Khoa học máy tính',
    schoolId: 'DUT',
    schoolName: 'Đại học Bách khoa - Đại học Đà Nẵng',
    examGroups: ['A00', 'A01'],
    score: 25.5,
    tuitionFee: 25,
    demand: 4.8,
    salary: '20-40M',
    views: 15200,
    color: 'bg-blue-100',
    icon: '💻',
    duration: 4,
    students: 350,
    category: 'tech'
  },
  {
    id: '2',
    name: 'Kỹ thuật phần mềm',
    schoolId: 'FPT',
    schoolName: 'Đại học FPT Đà Nẵng',
    examGroups: ['A00', 'A01', 'D01'],
    score: 23.0,
    tuitionFee: 80,
    demand: 4.9,
    salary: '22-38M',
    views: 12100,
    color: 'bg-purple-100',
    icon: '⚙️',
    duration: 4,
    students: 600,
    category: 'tech'
  },
  {
    id: '3',
    name: 'Quản trị kinh doanh',
    schoolId: 'DUE',
    schoolName: 'Đại học Kinh tế - Đại học Đà Nẵng',
    examGroups: ['A00', 'A01', 'D01', 'D07'],
    score: 24.5,
    tuitionFee: 22,
    demand: 4.2,
    salary: '15-30M',
    views: 9800,
    color: 'bg-green-100',
    icon: '📊',
    duration: 4,
    students: 800,
    category: 'business'
  },
  {
    id: '4',
    name: 'Ngôn ngữ Anh',
    schoolId: 'UFLS',
    schoolName: 'Đại học Ngoại ngữ - Đại học Đà Nẵng',
    examGroups: ['D01', 'D14', 'D15'],
    score: 23.8,
    tuitionFee: 18,
    demand: 4.5,
    salary: '12-25M',
    views: 8500,
    color: 'bg-pink-100',
    icon: '🇬🇧',
    duration: 4,
    students: 450,
    category: 'language'
  },
  {
    id: '5',
    name: 'Sư phạm Tiếng Anh',
    schoolId: 'UED',
    schoolName: 'Đại học Sư phạm - Đại học Đà Nẵng',
    examGroups: ['D01', 'D14', 'D15'],
    score: 26.0,
    tuitionFee: 0,
    demand: 4.0,
    salary: '10-20M',
    views: 7300,
    color: 'bg-yellow-100',
    icon: '👩‍🏫',
    duration: 4,
    students: 200,
    category: 'education'
  },
  {
    id: '6',
    name: 'Marketing',
    schoolId: 'DUE',
    schoolName: 'Đại học Kinh tế - Đại học Đà Nẵng',
    examGroups: ['A00', 'A01', 'D01'],
    score: 26.5,
    tuitionFee: 22,
    demand: 4.7,
    salary: '15-35M',
    views: 11000,
    color: 'bg-orange-100',
    icon: '📱',
    duration: 4,
    students: 400,
    category: 'business'
  },
  {
    id: '7',
    name: 'An toàn thông tin',
    schoolId: 'DTU',
    schoolName: 'Đại học Duy Tân',
    examGroups: ['A00', 'A01'],
    score: 21.0,
    tuitionFee: 35,
    demand: 4.6,
    salary: '25-45M',
    views: 6500,
    color: 'bg-cyan-100',
    icon: '🔒',
    duration: 4,
    students: 150,
    category: 'tech'
  },
  {
    id: '8',
    name: 'Du lịch và Lữ hành',
    schoolId: 'DTU',
    schoolName: 'Đại học Duy Tân',
    examGroups: ['A00', 'C00', 'D01'],
    score: 19.5,
    tuitionFee: 30,
    demand: 4.1,
    salary: '12-22M',
    views: 5400,
    color: 'bg-red-100',
    icon: '✈️',
    duration: 4,
    students: 300,
    category: 'tourism'
  }
]
