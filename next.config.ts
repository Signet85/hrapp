/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export хийхэд зориулагдсан
  // Хэрэв Image Optimization ашиглаж байвал custom loader тохируулах шаардлагатай байж магадгүй
  // images: {
  //   loader: 'imgix', // эсвэл 'cloudinary', 'akamai'
  //   path: '', // Firebase Hosting дээр зураг байршуулахгүй бол
  // },
};

export default nextConfig;
