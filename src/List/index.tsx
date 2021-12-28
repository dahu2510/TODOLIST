import React from "react";
import './index.less';
function List({ finishDate, unFinishDate, changeType }) {
    return (
        <div className='List'>
            <div className='unFinishList'>
                {
                    unFinishDate.map(item =>
                        <div className='listItem' key={item.id} >
                            <p className={item.type ? 'lineThrough' : ''}>{item.name}</p>
                            <div>
                                <button onClick={() => changeType(item.id, 'event')}>{item.type ? '恢复' : '完成'}</button>
                                <button onClick={() => changeType(item.id, 'show')}>删除</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='finishList'>
                {
                    finishDate.map(res =>
                        <div div className='listItem' key={res.id} >
                            <p className={res.type ? 'lineThrough' : ''}>{res.name}</p>
                            <div>
                                <button onClick={() => changeType(res.id, 'event')}>{res.type ? '恢复' : '完成'}</button>
                                <button onClick={() => changeType(res.id, 'show')}>删除</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
}
export default List