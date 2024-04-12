import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History({dash = "transaction"}) {
    const {transactionHistory} = useGlobalContext()

    let [...history] = transactionHistory(); 
    if(dash === "dashboard"){
        history = transactionHistory().slice(0 , 3);
    }


    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'income' ? 'var(--color-green)' : 'red' 
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'income' ? 'var(--color-green)' : 'red'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History