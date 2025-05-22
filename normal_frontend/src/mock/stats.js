// 模拟统计数据
const stats = {
  // 资源类型分布
  resourceTypes: [
    { type: '课件', count: 15 },
    { type: '视频', count: 8 },
    { type: '教案', count: 12 },
    { type: '试题', count: 20 },
    { type: '其他', count: 5 }
  ],

  // 学科分布
  subjects: [
    { subject: '数学', count: 18 },
    { subject: '计算机科学', count: 15 },
    { subject: '英语', count: 10 },
    { subject: '物理', count: 8 },
    { subject: '文学', count: 5 },
    { subject: '化学', count: 4 }
  ],

  // 每月资源上传量
  monthlyUploads: [
    { month: '2024-08', count: 8 },
    { month: '2024-09', count: 12 },
    { month: '2024-10', count: 10 },
    { month: '2024-11', count: 15 },
    { month: '2024-12', count: 20 },
    { month: '2025-01', count: 18 },
    { month: '2025-02', count: 16 },
    { month: '2025-03', count: 22 },
    { month: '2025-04', count: 25 },
    { month: '2025-05', count: 30 }
  ],

  // 每月下载量
  monthlyDownloads: [
    { month: '2024-08', count: 45 },
    { month: '2024-09', count: 60 },
    { month: '2024-10', count: 75 },
    { month: '2024-11', count: 90 },
    { month: '2024-12', count: 120 },
    { month: '2025-01', count: 135 },
    { month: '2025-02', count: 105 },
    { month: '2025-03', count: 150 },
    { month: '2025-04', count: 180 },
    { month: '2025-05', count: 210 }
  ],

  // 用户活跃度
  userActivity: [
    { date: '2025-04-25', logins: 35, downloads: 28, uploads: 5 },
    { date: '2025-04-26', logins: 40, downloads: 32, uploads: 4 },
    { date: '2025-04-27', logins: 38, downloads: 30, uploads: 6 },
    { date: '2025-04-28', logins: 42, downloads: 35, uploads: 3 },
    { date: '2025-04-29', logins: 45, downloads: 38, uploads: 7 },
    { date: '2025-04-30', logins: 50, downloads: 42, uploads: 8 },
    { date: '2025-05-01', logins: 48, downloads: 40, uploads: 5 }
  ],

  // 总计统计
  totals: {
    totalResources: 60,
    totalDownloads: 1250,
    totalUsers: 120,
    totalTeachers: 25,
    totalStudents: 94,
    totalAdmins: 1,
    averageRating: 4.6
  }
};

export default stats;
