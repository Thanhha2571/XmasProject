import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Modal from "react-modal"
import { pickUpAddressList } from '../../asset/data/data';
import { pickUpTime } from '../../asset/data/data';
import { pickUpQuantity } from '../../asset/data/data';
import "./CollectionForm.css"

const CustomerForm = () => {
    const [storedValue, setStoredValue] = useState()
    const [formData, setFormData] = useState({
        user: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            zip_code: '',
            city: '',
            street: '',
        },
        agreement: false,
    });
    const [boxAdd, setBoxAdd] = useState(false)
    const [selectedPickupAddress, setSelectedPickupAddress] = useState('');
    const [selectedPickupTime, setSelectedPickupTime] = useState('');
    const [selectedPickupQuantity, setselectedPickupQuantity] = useState('');
    // useEffect(() => {
    //     if (formData.user.first_name.length > 0) {
    //         setFirstNameError(false);
    //     }
    //     if (formData.user.last_name.length > 0) {
    //         setLastNameError(false);
    //     }
    //     if (formData.user.email.length > 0) {
    //         setEmailError(false);
    //     }
    //     if (formData.user.phone.length > 0) {
    //         setPhoneError(false);
    //     }
    //     if (formData.user.zip_code.length > 0) {
    //         setZipError(false);
    //     }
    //     if (formData.user.city.length > 0) {
    //         setCityError(false);
    //     }
    //     if (formData.user.street.length > 0) {
    //         setStreetError(false);
    //     }
    // },[formData.user.first_name,formData.user.last_name,formData.user.email, formData.user.phone,formData.user.zip_code,formData.user.city,formData.user.street ])
    // const [firstNameError, setFirstNameError] = useState(false);
    // const [lastNameError, setLastNameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    // const [phoneError, setPhoneError] = useState(false);
    // const [zipError, setZipError] = useState(false);
    // const [cityError, setCityError] = useState(false);
    // const [streetError, setStreetError] = useState(false);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'agreement') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                user: {
                    ...prevData.user,
                    [name]: type === 'checkbox' ? checked : value,
                },
            }));
        }
    };


    // const handelError = () => {
    //     if (formData.user.first_name.length === 0) {
    //         setFirstNameError(true);
    //     }
    //     if (formData.user.last_name.length === 0) {
    //         setLastNameError(true);
    //     }
    //     if (formData.user.email.length === 0) {
    //         setEmailError(true);
    //     }
    //     if (formData.user.phone.length === 0) {
    //         setPhoneError(true);
    //     }
    //     if (formData.user.zip_code.length === 0) {
    //         setZipError(true);
    //     }
    //     if (formData.user.city.length === 0) {
    //         setCityError(true);
    //     }
    //     if (formData.user.street.length === 0) {
    //         setStreetError(true);
    //     }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBoxAdd(true)
        if (!formData.agreement) {
            // Handle the case when the agreement is not accepted
            console.log('Please accept all terms and conditions.');
            return;
        }
        // console.log('Form submitted:', formData);
        // const productsFromStorage = localStorage.getItem('products');

        // const parsedProducts = productsFromStorage ? JSON.parse(productsFromStorage) : null;

        // const orderList = parsedProducts.filter((product) => product.quantity > 0);
        // console.log(orderList);
        // setStoredValue(orderList);

        // console.log(parsedProducts);

        // const pick_up_place = localStorage.getItem('pick_up_place');
        // const pick_up_date = localStorage.getItem('pick_up_date');
        const { data } = await axios.post("https://orders-chrismast-ten.vercel.app/api/order/orderForm", {
            pick_up_time: selectedPickupTime,
            pick_up_place: selectedPickupAddress,
            first_name: formData.user.first_name,
            last_name: formData.user.last_name,
            email: formData.user.email,
            phone_number: formData.user.phone,
            products: [{
                product_name: "Ganspaket",
                product_quantity: selectedPickupQuantity
            }]
        });
        // console.log(data);
        // setFormData({
        //     user: {
        //         first_name: '',
        //         last_name: '',
        //         email: '',
        //         phone: '',
        //     },
        //     agreement: false,
        // });
        setTimeout(() => {
            setBoxAdd(false)
            window.location.reload();
        }, 1000);

        // localStorage.clear();
    };
    return (
        <div className="bg-backGround opacity-95 flex flex-col w-full h-auto relative
        mobileSmall:px-4 mobileSmall:gap-5 mobileSmall:justify-center mobileSmall:items-center
        tablet:justify-start tablet:items-start tablet:w-full tablet:px-12
        laptop:justify-center laptop:items-center
        ">
            <div className="w-full text-center font-bold text-textTitle text-[50px] font-DancingScript gap-10 mt-10 relative
        mobileSmall:text-[35px]
        mobileLarge:text-[45px]
        tablet:text-[60px]
        desktop:text-[70px] desktop:gap-4
        desktopLarge:text-[100px] desktopLarge:gap-10

            ">Bestellformular</div>
            <div className="w-full text-center font-bold text-textWarning font-Montserrat relative italic
                mobileSmall:text-[12px]
                tablet:text-[15px]
                laptop:text-[15px]
                desktop:text-[15px]
                desktopLarge:text-[15px]
            ">Bitte bestellen Sie Ihr Gänsepaket spätestens 2 Tage vor Abholtermin. Letze Bestellannahme ist am 21.12.2023</div>
            <div></div>
            <form
                className="font-Montserrat flex flex-col justify-center items-center gap-5 w-full
                tablet:px-8 tablet:gap-6
                laptop:px-12 laptop:gap-8 laptop:max-w-[800px]
                desktop:px-14 desktop:gap-10 desktop:max-w-[1000px]
                desktopLarge:px-18 desktopLarge:gap-12 desktopLarge:max-w-[1400px]
                "
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between w-full
                    mobileSmall:flex-col mobileSmall:gap-5 mobileSmall:w-full   
                    tablet:flex-row     
                ">
                    <div className="flex
                        mobileSmall:flex-col mobileSmall:gap-2
                        tablet:w-1/2
                    ">
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.user.first_name}
                            onChange={handleChange}
                            required
                            className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-lg focus:border-textColor focus:border-4
                            desktop:placeholder:text-xl desktop:text-xl
                            desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                            "
                            placeholder='Vorname*'
                        />
                        {/* {firstNameError && <span className="text-red-600 text-sm">First name is required</span>} */}
                    </div>
                    <div className="flex
                        mobileSmall:flex-col mobileSmall:gap-2
                        tablet:w-1/2
                    ">
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.user.last_name}
                            onChange={handleChange}
                            required
                            className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-lg focus:border-textColor focus:border-4
                            desktop:placeholder:text-xl desktop:text-xl
                            desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                            "
                            placeholder='Nachname*'

                        />
                        {/* {lastNameError && <span className="text-red-600 text-sm">Last name is required</span>} */}
                    </div>
                </div>
                <div className="flex
                        mobileSmall:flex-col mobileSmall:gap-2 w-full">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.user.email}
                        onChange={handleChange}
                        required
                        className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-md focus:border-textColor focus:border-4
                        desktop:placeholder:text-xl desktop:text-xl
                        desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                        "
                        placeholder='E-Mail-Adresse*'
                    />
                    {/* {emailError && <span className="text-red-600 text-sm">Email is required</span>} */}
                </div>
                <div className="flex
                        mobileSmall:flex-col mobileSmall:gap-2 w-full">
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formData.user.phone}
                        onChange={handleChange}
                        required
                        className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-md focus:border-textColor focus:border-4
                        desktop:placeholder:text-xl desktop:text-xl
                        desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                        "
                        placeholder='Telefon*'
                    />
                    {/* {phoneError && <span className="text-red-600 text-sm">Phone number is required</span>} */}
                </div>
                <div className="flex
                    mobileSmall:flex-col mobileSmall:gap-2 w-full
                    tablet:w-full"
                >
                    <select
                        id="pickupQuantity"
                        name="pickupQuantity"
                        value={selectedPickupQuantity}
                        onChange={(e) => setselectedPickupQuantity(e.target.value)}
                        required
                        className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-md focus:border-textColor focus:border-4
                        desktop:placeholder:text-xl desktop:text-xl
                        desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                        "
                    >
                        <option value="" disabled className='italic text-sm'>Anzahl der Gänsepakete*</option>
                        {pickUpQuantity.map((item, index) => (
                            <option className='text-sm text-textColor block' key={index} value={item.quantity}>
                                {item.quantity}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between w-full
                    mobileSmall:flex-col mobileSmall:gap-5 mobileSmall:w-full   
                    tablet:flex-row">
                    <div className="flex
                    mobileSmall:flex-col mobileSmall:gap-2 w-full
                    tablet:w-1/2"
                    >
                        {/* <label htmlFor="pickupAddress" className="text-textColor font-Montserrat text-sm">Abholort*</label> */}
                        <select
                            id="pickupAddress"
                            name="pickupAddress"
                            value={selectedPickupAddress}
                            onChange={(e) => setSelectedPickupAddress(e.target.value)}
                            required
                            placeholder='Adresse der Abholung*'
                            className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-md focus:border-textColor focus:border-4
                            desktop:placeholder:text-xl desktop:text-xl
                            desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                            "
                        >
                            <option value="" disabled className='italic text-sm'>Adresse der Abholung*</option>
                            {pickUpAddressList.map((address, index) => (
                                <option className='text-sm text-textColor block' key={index} value={address.address}>
                                    {address.address}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex
                    mobileSmall:flex-col mobileSmall:gap-2 w-full
                    tablet:w-1/2"
                    >
                        <select
                            id="pickupTime"
                            name="pickupTime"
                            value={selectedPickupTime}
                            onChange={(e) => setSelectedPickupTime(e.target.value)}
                            required
                            className="placeholder:italic placeholder:text-sm placeholder:text-textColor bg-backGround text-textColor border-2 border-solid border-textColor rounded-md focus:border-textColor focus:border-4
                            desktop:placeholder:text-xl desktop:text-xl
                            desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                            "
                        >
                            <option value="" disabled className='italic text-sm'>Uhrzeit der Abholung*</option>
                            {pickUpTime.map((item, index) => (
                                <option className='text-sm text-textColor block' key={index} value={item.time}>
                                    {item.time}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="pickupTime"
                            className="text-textColor font-Montserrat text-sm italic
                            desktop:placeholder:text-xl desktop:text-xl
                            desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                        "
                        >Nur am 24.12 zwischen 12.00 - 15.00 Uhr</label>
                    </div>
                </div>

                <div className='flex justify-start gap-2 w-full items-center'>
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        className='desktopLarge:w-10 desktopLarge:h-10 desktopLarge:text-3xl'
                        required
                    />
                    <label htmlFor="agreement"
                        className="text-textColor font-Montserrat text-sm
                        desktop:placeholder:text-xl desktop:text-xl
                        desktopLarge:placeholder:text-3xl desktopLarge:py-4 desktopLarge:text-3xl
                    "
                    >
                        Einwilligung zur Datenverwendung</label>
                </div>

                <div className="flex
                    mobileSmall:flex-col mobileSmall:gap-2 w-full
                    tablet:w-full">
                    <p className='italic text-textColor text-sm leading-8 desktop:text-lg desktop:leading-10 desktopLarge:text-3xl desktopLarge:leading-loose'>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                        Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an <span className='underline font-extrabold'>service@the-coco.de</span>
                        . Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                    <p className="italic text-textColor text-sm leading-8 desktop:text-lg desktop:leading-10 desktopLarge:text-3xl desktopLarge:leading-loose">Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung</p>
                </div>
                <Modal
                    isOpen={boxAdd}
                    onRequestClose={() => setBoxAdd(false)}
                    overlayClassName="popup-overlay"
                    className="popup-content"
                >
                    <button onClick={() => setBoxAdd(false)} className="text-2xl text-white w-7 h-7 ml-auto">x</button>
                    <div className="flex flex-col gap-2 text-white text-base justify-center items-center p-2 desktop:gap-4">
                        <span className='font-DancingScript text-3xl text-center
                            desktop:text-5xl desktop:mt-10
                        '>CÔCÔ</span>
                        <span className='font-bold text-center desktop:text-3xl'>Vielen Dank für Ihren Einkauf bei</span>
                        <p className='font-bold text-center desktop:text-3xl'>CÔCÔ</p>
                        <span className='text-center desktop:text-3xl'>Ihre Bestellung Nr.{formData.user.phone} wird berücksichtigt.</span>
                        <span className='text-center desktop:text-3xl'>Wir senden Ihnen eine Bestellbestätigung an:{formData.user.email}</span>
                    </div>
                </Modal>
                <div className="w-full flex justify-center px-3 py-4 bg-textWarning text-textColor font-extrabold hover:border-4 hover:bg-red-950 rounded-md mb-6 cursor-pointer desktopLarge:px-5 desktopLarge:py-7 ">
                    <button className="w-full h-full
                    desktop:text-xl
                    desktopLarge:text-3xl" type="submit">Absenden</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerForm