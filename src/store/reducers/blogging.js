

export default function blogging(state = { blogs: "abc"}, action) {
    switch(action, type) {
        case 'BLOG':
            return (
                ...state,
                ...actions.blogging,
            )
    }
}