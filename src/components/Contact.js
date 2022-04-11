import React from 'react'
import { Container, Label } from 'reactstrap'
import { Alert, Input, Button } from 'antd'
// import InputMask from 'react-input-mask';
import MaskedInput from 'antd-mask-input'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const notify = () => toast("Iltimos ma'lumotni to'ldiring");
    const success = () => toast("Muvafaqqiyatli yuborildi!");
    const { TextArea } = Input;
    async function fetchPosts() {
        const response = await axios.get('https://abdugani.pythonanywhere.com/profile/?format=json')
    }
    fetchPosts()

    function getInput() {
        let name = document.querySelector(".name").value
        let number = document.querySelector(".number").value
        let description = document.querySelector(".description").value
        if (name != "" && number != "" && description != "") {
            axios({
                method: 'post',
                url: "https://abdugani.pythonanywhere.com/profile/",
                data: {
                    "fullname": name,
                    "phone_number": number,
                    "description": description
                }
            }).then(function (response) {
                success()
            }).catch(function (error) {
                        // console.log(error)
                    });
            document.querySelector(".name").value = ""
            document.querySelector(".number").value = ""
            document.querySelector(".description").value = ""
        }
        else {
            notify()
        }
    }
    return (
        <div className="contact pb-5" id="contact">
            <Container>
                <h6 className="text-center py-md-4 py-2">Biz bilan bog'lanish</h6>
                <div className="row">
                    <div className="col-md-6 offset-md-3 pb-3">
                        <MaskedInput className="w-100 py-2 rounded number" mask="+998(11) 111 11 11 " placeholder="Raqamingizni kiriting" required name="card" id="number" size="20" />
                    </div>
                    <div className="col-md-6 offset-md-3 pb-3">
                        <Input className="w-100 rounded name" size="large" id="name" placeholder="Ismingizni kiriting" required="required" mask="99/666/655" />
                    </div>
                    <div className="col-md-6 offset-md-3 pb-3">
                        <TextArea className="w-100 rounded description" id="fikr"
                            placeholder="Fikringizni qoldiring"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        <Button className="mt-3 send ml-auto" size="large" shape="round" type="submit" onClick={() => getInput()}>
                            Yuborish
                        </Button>
                        <ToastContainer />
                    </div>
                </div>
            </Container>
        </div>
    )
}
