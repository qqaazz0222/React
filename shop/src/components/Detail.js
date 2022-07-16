import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props) {

    useEffect(()=>{
        let a = setTimeout( ()=>{ setAlert(false) }, 2000);
        let b = setTimeout( ()=>{ setPage('end')  }, 100)
        return()=>{
            clearTimeout(a);
            clearTimeout(b);
            setPage('');
        }
    }, []);
    let { id } = useParams();
    let [alert, setAlert] = useState(true);
    let [page, setPage] = useState('')
    let [tab, setTab] = useState(0);

    return (
        <div className={'start ' + page}>
            <div className="container">
                {
                    alert ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
                }
                
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes'+(Number(id)+1)+'.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{ props.shoes[id].title }</h4>
                        <p>{ props.shoes[id].content }</p>
                        <p>{ props.shoes[id].price }원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
                <Nav fill variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab}/> 
            </div>
        </div>    
    )
}

function TabContent({tab}){
    let[fade, setFade] = useState('');
    useEffect(()=>{
        let a = setTimeout(() => {
            setFade('end')    
        }, 100);
        return ()=>{ 
            clearTimeout(a)
            setFade('') 
        }
    }, [tab])
    return (
    <div className={'start ' + fade}>
        { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tab] }
    </div>)
  }

export default Detail;