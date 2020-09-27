import React from 'react';

export default function LogIn() {
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
        id: ${id}
        password: ${password}
    `);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>로그인ㅎㅎ</h1>
            <label>
                <div>
                    <p>ID</p>
                    <input
                        name="id"
                        type="id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required />
                </div>
            </label>

            <label>
                <div>
                    <p>비밀번호</p>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                </div>
            </label>
            <button>Submit</button>

        </form>
    );
}