import React from 'react'
import './index.scss'
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.`;

const LegalPart = () => {
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div className='staticpart2'>
        <div className='staticimg'><img src="src/images/atty_2.jpg" alt="" /></div>
        <div className='statictext'>
            <h1>We Have Legal Solutions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum,<br />  voluptatum, quod deserunt maiores?

Modi perferendis ipsa ducimus <br /> consequuntur excepturi autem, numquam facere aperiam iste <br /> nam molestias provident consectetur molestiae <br /> voluptatibus ipsum. Fugiat, quas.</p>
        </div>
        <div className='accordionpart'>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="How to download and registered ?" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="How to create your paypal accound ?" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="How to link your paypal and bank accound ?" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
        </div>
    </div>
  )
}

export default LegalPart