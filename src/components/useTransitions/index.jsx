import React, { useState, useTransition } from 'react';

import AboutTab from './About';
import ContactTab from './Contact';
import PostsTab from './Post';
import TabButton from './TabButton';

// type Tab = 'about' | 'posts' | 'contact';

const Demo = () => {
    const [tab, setTab] = useState('about');

    const selectTab = (tab) => {
        setTab(tab);
    };

    return (
        <div className='tutorial'>
            <div className='mb-4 flex flex-row items-center gap-4'>
                <TabButton
                    title='About'
                    onClick={() => selectTab('about')}
                    variant={
                        tab === 'about' ? 'primary' : 'secondary'
                    }
                />
                <TabButton
                    title='Posts'
                    onClick={() => selectTab('posts')}
                    variant={
                        tab === 'posts' ? 'primary' : 'secondary'
                    }
                />
                <TabButton
                    title='Contact'
                    onClick={() => selectTab('contact')}
                    variant={
                        tab === 'contact' ? 'primary' : 'secondary'
                    }
                />
            </div>

            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </div>
    );
};

export default Demo;