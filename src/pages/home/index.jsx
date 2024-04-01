
import  Navigation from '../../components/Navigation'
import Card from '../../components/Card'
import TabPages from './tabPages/Index'
import Creation from '../home/siderPages/Creation'
import AdvancedBtns from '../home/siderPages/AdvancedBtns'
import SelfFunctions from '../home/siderPages/SelfFunctions'
import {useState} from "react";
export default  function Index(){
    const [hide,setHide] = useState(true)
    const handleChange = (isHide) => {
        setHide(isHide)
    }
    return <div className=' bg-gray-100'>
        <Navigation className=' sticky top-0' hide={hide}></Navigation>
        <div className=' mx-auto w-320 max-w-7xl flex my-2 px-20'>
            <Card className='w-2/3'>
                <TabPages onChange={handleChange}/>
            </Card>
            <div className='w-1/3'>
                <Card className='w-full'>
                    <Creation/>
                </Card>
                <Card className='w-full'>
                    <AdvancedBtns/>
                </Card>
                <Card className='w-full sticky top-20'>
                    <SelfFunctions/>
                </Card>
            </div>
        </div>
    </div>
}