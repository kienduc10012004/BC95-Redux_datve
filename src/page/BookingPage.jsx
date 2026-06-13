import React from 'react'
import RapPhim from '../components/RapPhim'
import DanhsachGheDaChon from '../components/DanhSachGheDaChon'

const BookingPage = () => {
    return (
        <div
            className='min-h-screen bg-cover bg-no-repeat'
            style={{backgroundImage: "url('/bgmovie.jpg')"}}
        >
            <div className="min-h-screen bg-black/65">
            {/* ══ HEADER ══ */}
            <header className="text-center py-5">
                <h1 className="text-yellow-400 text-2xl md:text-3xl font-extrabold tracking-widest uppercase">
                    Đặt Vé Xem Phim CyberLearn.vn
                </h1>
            </header>
            {/* ══ MAIN: 2 CỘT ══ */}
            <main className="container mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-8">
                {/* ╔═══════════════════════════════════════════════════╗
     ║  COMPONENT: RapPhim                               ║
     ║  File:      src/components/RapPhim.jsx            ║
     ║  Vị trí:    cột trái, chiếm phần còn lại (flex-1) ║
     ║  Nội dung:  màn hình chiếu + sơ đồ toàn bộ ghế   ║
     ╚═══════════════════════════════════════════════════╝ */}
                <RapPhim />
                {/* ╔═══════════════════════════════════════════════════════╗
     ║  COMPONENT: DanhSachGheChon                           ║
     ║  File:      src/components/DanhSachGheChon.jsx        ║
     ║  Vị trí:    cột phải, cố định 320px (lg:w-80)        ║
     ║  Nội dung:  chú thích màu + bảng ghế + tổng + nút    ║
     ╚═══════════════════════════════════════════════════════╝ */}
                <DanhsachGheDaChon />
            </main>
        </div>
        </div>
        
    )
}

export default BookingPage