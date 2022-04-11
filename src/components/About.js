import React from 'react'
import './style.scss'
export default function About() {
    return (
        <div className="about">
            <div className="container last">
                <div className="row pt-5">
                    <div className="col-md-5 my-2 mx-auto">
                        <img className="w-75 d-flex justify-content-center rounded mx-auto" src="images/Group 5.png" alt="" />
                    </div>
                    <div className="col-md-7 my-2">
                        <div className="text text-light p-4">
                            <h5 className="text-center">Biz haqimizda</h5>
                            <p>Hammaga yana salom! Shunday qilib, bizning iSet jamoamiz siz mening ismim Bahromjon ekanligini allaqachon bilasiz. O'zim haqimda bir oz: 23 yosh, bolaligimdan ijodni yaxshi ko'raman, Toshkent shahrida yashayman.<br /> Nima uchun dasturlash? Hammasi oddiy - bu menga yoqadi, kelajak kasbi. Hozirda men veb-dizayn, front-end va back-end ishlab chiqishga ixtisoslashganman. Nega meni tanlashing kerak? Men har bir buyurtmaga katta mas'uliyat va mehr bilan yondashaman, chunki men o'zimni nom qozonishni, loyihani, mijozni va uning maqsadli auditoriyasini to'liq o'rganishni, sifatli ishlashni, buyurtmani tez va o'ziga xos tarzda bajarishga harakat qilaman. Bizga ishonib, loyihangiz uchun maksimal daromad olasiz, asablaringizni va vaqtingizni tejaysiz. Agar siz biz bilan qiziqsangiz, biz haqimizda ko'proq ma'lumot bilmoqchi bo'lsangiz yoki bizning xizmatlarimizdan foydalanmoqchi bo'lsangiz, quyidagi havola orqali ro'yxatdan o'ting!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
