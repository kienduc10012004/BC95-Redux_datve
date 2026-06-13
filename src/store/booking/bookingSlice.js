import danhSachGhe from "../../data/danhSachGhe";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    danhSachGhe: danhSachGhe,
    gheKhachChon: [],   
}

// Tạo slice booking
const bookingSlice = createSlice({
    name: "booking",
    initialState,   
    reducers: {
        // Action: chọn ghế
        // payload: object ghế được click
        chonGhe: (state, action) => {
            const gheDuocChon = action.payload
            // kiem tra gheDuocChon da co trong gheKhachChon chua
            const index = state.gheKhachChon.findIndex(g => g.soGhe === gheDuocChon.soGhe);

            // nếu chưa có → thêm vào
            if (index === -1) {
                state.gheKhachChon.push(gheDuocChon);
            }

            // nếu đã có → xóa khỏi
            else {
                state.gheKhachChon.splice(index, 1);
            }
        },

        // Action: hủy ghế đã chọn
        // payload: số ghế được cần hủy
        huyGhe: (state, action) => {
            const soGheCanHuy = action.payload
            state.gheKhachChon = state.gheKhachChon.filter(ghe => ghe.soGhe !== soGheCanHuy)
        },

        // Action: đặt vé (xử lý ghế đã đặt)
        // payload: mảng các ghế đã đặt
        datVe: (state) => {
            state.danhSachGhe = state.danhSachGhe.map((hangGhe) => {
                if (hangGhe.hang === "") {
                    return hangGhe
                }

                return {
                    ...hangGhe,
                    danhSachGhe: hangGhe.danhSachGhe.map((ghe) => {
                        const gheDangChon = state.gheKhachChon.find(item => item.soGhe === ghe.soGhe)

                        if (gheDangChon) {
                            return {
                                ...ghe,
                                daDat: true
                            }
                        }

                        return ghe
                    })
                }
            })

            state.gheKhachChon = []
        }
    }

}) 

export const { chonGhe, huyGhe, datVe } = bookingSlice.actions

// define các selector để lấy dữ liệu từ state
// state là tập hợp tất cả các state trong store, state.booking là state của bookingSlice
export const selectorDanhSachGhe = (state) => state.booking.danhSachGhe
export const selectorGheKhachChon = (state) => state.booking.gheKhachChon

export default bookingSlice.reducer