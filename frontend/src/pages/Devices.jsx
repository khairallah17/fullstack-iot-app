import { useEffect, useState } from 'react'
import { Text, Metric, Card, Title } from '@tremor/react'
import { RxCross2 } from "react-icons/rx";
import useGlobalContextHook from '../hooks/useGlobalContextHook';
import { ToastContainer, toast } from 'react-toastify';
import { deleteDeviceService, getAllDevicesService } from '../services/Devices.service';

const Devices = () => {

  const [openModal, setOpenModal] = useState(false)
  const [categories, setCategories] = useState([])
  const [devices, setDevices] = useState([])
  const [image, setImage] = useState("")

  const { getAllCategories, 
          setActiveNav,
          jwtDecoder,
          deviceName, setDeviceName,
          deviceSerie, setDeviceSerie,
          deviceImage, setDeviceImage,
          deviceLimit, setDeviceLimit,
          deviceCategory, setDeviceCategory,
          deviceUser,
          addDevice,
          token } = useGlobalContextHook()

  useEffect(() => {

    setActiveNav("devices")

    const init = async () => {

      try {

        const data = await getAllCategories()
        const dt = await getAllDevicesService(deviceUser, token)

        setDevices(dt)
        setCategories(data)
        setDeviceCategory(data[0]._id)

      } catch (error) {
        console.log(error)
      }

    }

    init()
    jwtDecoder()

  },[])


  const uploadFile = (e) => {

    const reader = new FileReader()
    setDeviceImage(e.target.files[0])
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setImage(reader.result)
    }
    reader.onerror = (error) => console.log("error ==> ", error)

  }

  const addDeviceForm = async () => {

    try {

      const data = await addDevice()
      console.log(data)

      toast.success("dispositif ajouter")
      setOpenModal(false)

    } catch (error) {
      console.log(error)
    }

  }

  const deleteDeviceForm = async (id) => {

    try {

      const data = await deleteDeviceService(id, token)

      console.log(data)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <ToastContainer />
      <div className={`absolute bg-black duration-300 ${openModal ? "opacity-20 z-10" : "opacity-0 z-[-1]"} h-screen w-screen top-0 left-0`}></div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8">
            
            <h1 className="text-3xl font-bold mb-5">Ajouter ou supprimer vos dispositifs consomation</h1>
            
            <div className="flex items-end w-full justify-end gap-4">
              <button onClick={() => setOpenModal(true)} type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-green-600 text-white hover:text-white text-sm font-semibold transition">
                Ajouter
              </button>
            </div>

            <hr className="mt-8"/>

            <div className='mt-10 w-full flex flex-col gap-6'>
              {
                devices.map((item, index) => (
                  <Card key={index} className="max-w-full mx-auto flex items-center justify-between" decoration="top" decorationColor={item.category.name == "eau" ? "blue" : "yellow"}>
                    <div className='flex items-center gap-4'>
                      <img src={`${import.meta.env.VITE_BACKEND_URL}${item.image}`} alt="" className=' w-10 h-10 max-w-10 max-h-10 rounded-full' />
                      <div>
                        <Title className='capitalize'>{item.deviceName}</Title>
                        <Text>{item.category.name}</Text>
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <button className='bg-yellow-500 hover:bg-yellow-600 duration-200 px-4 py-2 rounded-lg text-white'>
                        consomer
                      </button>
                      <button onClick={() => deleteDeviceForm(item._id)} className='bg-red-500 hover:bg-red-600 duration-200 px-4 py-2 rounded-lg text-white'>
                        delete
                      </button>
                    </div>
                  </Card>
                ))
              }
            </div>

            <dialog className=' z-20 rounded-lg p-5 top-[15%]' open={openModal ? true : false}>
              <button className='w-full flex items-center justify-end' onClick={() => setOpenModal(false)}>
                <RxCross2/>
              </button>
              <h3 className='text-center font-semibold text-lg'>Ajouter les information de votre appareils</h3>
              <form onSubmit={addDeviceForm} method="dialog" className='my-3 flex flex-col gap-4'>

                <img src={image || ""} className={image && 'w-32 h-32'} alt="" />

                <div className='flex flex-col gap-2'>
                  <label htmlFor="deviceName">
                    Image du dispositifs
                  </label>
                  <input className='outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6' onChange={uploadFile} type="file" name="deviceName" id="" required/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="deviceName">
                    Nom du dispositifs
                  </label>
                  <input value={deviceName} onChange={e => setDeviceName(e.target.value)} className='outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6' type="text" name="deviceName" id="" required/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="deviceSeries">
                    Serie du dispositifs
                  </label>
                  <input value={deviceSerie} onChange={e => setDeviceSerie(e.target.value)} className='outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6' type="text" name="deviceSeries" id="" required/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="consumption">
                    Consomation Limit
                  </label>
                  <input value={deviceLimit} onChange={e => setDeviceLimit(e.target.value)} className='outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6' type="number" name="consumption" id="" required/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="consumption">
                    Categorie
                  </label>
                  <select onChange={e => setDeviceCategory(e.target.value)} className='outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 bg-white' name="" id="" required >
                    {
                      categories.map((item, index) => (
                        <option key={index} className='bg-white' value={item._id}>
                          {item.name}
                        </option>
                      ))
                    }
                  </select>
                </div>

                <button type='submit' className='w-full bg-blue-400 py-2 rounded-lg text-white mt-2'>
                  Ajouter
                </button>

              </form>
            </dialog>


          </div>
        </div>
    </div>
  )
}

export default Devices