import React, {useState} from 'react';
import InputNumber from './components/InputNumber';
import ButtonNumber from './components/Button';
import Result from './components/Result';
import Counter from './components/counter';


const AppHooks = () => {

    let[hsa, setHsa]=useState('');
    let[hsb, setHsb]=useState('');
    let[hsc, setHsc]=useState('');
    let[result, setResult]=useState(null);

    const changeInput = (e) =>{
        let nameInput = e.target.name;
        let val= e.target.value;

        if(nameInput==='hsa'){
            setHsa(val);
        }else if(nameInput==='hsb'){
            setHsb(val);
        }else if(nameInput==='hsc'){
            setHsc(val);
        }
    }
    const giaipt = () => {
        // console.log(hsa, hsb, hsc);
        let chka=null;
        let chkb=null;
        let chkc=null;

        if(isNaN(hsa)  && hsa.length>0){// kiem tra a co thuc su la number
            hsa=parseFloat(hsa);
        }else{
            chka=true;
        }
        if(isNaN(hsb)  && hsb.length>0){// kiem tra b co thuc su la number
            hsb=parseFloat(hsb);
        }else{
            chkb=true;
        }
        if(isNaN(hsc)  && hsc.length>0){// kiem tra b co thuc su la number
            hsc=parseFloat(hsc);
        }else{
            chkc=true;
        }
        if(chka && chkb && chkc){
            let delta=(hsb*hsb)-(4*hsa*hsc)
            if(delta<0){
                setResult(`pt vo nghiem`)
            }else if(delta===0){
                setResult(`pt co nghiem kep:
                    ${-hsb/(2*hsa)};
                `)
            }else{
                let x1=(hsb+Math.sqrt(delta))/(2*hsa);
                let x2=(hsb-Math.sqrt(delta))/(2*hsa);
                setResult(`pt co 2 nghiem phan biet la:
                    x1=${x1};
                    x2=${x2};
                `)
            }

        }else{
            setResult(`Please check again!`);
        }
    }


    return (
        <>
            <Counter/>
            <div>
                <p>He so a</p>
                <InputNumber change={changeInput} type="text" name="hsa" />
                <p>He so b</p>
                <InputNumber change={changeInput} type="text" name="hsb" />
                <p>He so c</p>
                <InputNumber change={changeInput} type="text" name="hsc" />
                <br></br>
                <ButtonNumber 
                    giaipt={giaipt}
                    type="button"
                >GiaiPT</ButtonNumber>
                <Result result={result} />
            </div>
        </>
    )
}
export default AppHooks;