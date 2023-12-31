import {reactive} from 'vue';
export const store = reactive({
    carouselTopList: [
        '/images/h5-slide-1-background.jpg',
        '/images/h5-slide-2-background.jpg',
        '/images/h5-slide-3-background.jpg',
    ],
    carouselTopInfo: [
        {
            img: '/images/h5-slide-1-background.jpg',
            title: 'Accelerate Your Career',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores veritatis veniam, atque eligendi tempora quia fugit a magnam mollitia placeat libero, error esse iure fuga, itaque rem.',
            button: 'Register Now',
        },
        {
            img: '/images/h5-slide-2-background.jpg',
            title: 'Premium Education',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores veritatis veniam, atque eligendi tempora quia fugit a magnam mollitia placeat libero, error esse iure fuga, itaque rem.',
            button: '',
        },
        {
            img: '/images/h5-slide-3-background.jpg',
            title: 'Contemporary Ideas',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores veritatis veniam, atque eligendi tempora quia fugit a magnam mollitia placeat libero, error esse iure fuga, itaque rem.',
            button: 'Register Now',
        },
    ],
    activeIndex: 0,
    nav: [
            {
                name:'Home',
                submenu1: [
                    {
                        name: 'Home1',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home2',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home3',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home4',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home5',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home6',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home7',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home8',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home9',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home10',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home11',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Home12',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Landing',
                        url: '#',
                        title: false,
                    },
                ],
                submenu2: [],
                submenu3: [],
                submenu4: [],
            },
            {
                name:'Courses',
                submenu1: [
                    {
                        name: 'Features',
                        url: '#',
                        title: true,
                    },
                    {
                        name: 'All Courses',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Standard List',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Course Single',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'User Dashboard',
                        url: '#',
                        title: false,
                    },
                ],
                submenu2: [
                    {
                        name: 'Business',
                        url: '#',
                        title: true,
                        img: '/images/course-4-f-img.jpg',
                        price: '$40',
                        prices: true
                    },
                ],
                submenu3: [
                    {
                        name: 'Languages',
                        url: '#',
                        title: true,
                        img: '/images/course-1-f-img.jpg',
                        price: '$20',
                        prices: true
                    },
                ],
                submenu4: [
                    {
                        name: 'Programming',
                        url: '#',
                        title: true,
                        img: '/images/course-2-f-img.jpg',
                        price: 'Free',
                        prices: true
                    },
                ],
            },
            {
                name:'Instructors',
                submenu1: [
                    {
                        name: 'Become an instructor',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Instructor single',
                        url: '#',
                        title: false,
                    },
                    
                ],
                submenu2: [],
                submenu3: [],
                submenu4: [],
            },
            {
                name:'Events',
                submenu1: [
                    {
                        name: 'Events Calendar',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Events List',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Events Single',
                        url: '#',
                        title: false,
                    },
                    
                ],
                submenu2: [],
                submenu3: [],
                submenu4: [],
            },
            {
                name:'Pages',
                submenu1: [
                    {
                        name: 'About',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Gallery',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Pricing Plan',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Blog',
                        url: '#',
                        title: false,
                        dropDownMenu: [
                            {
                                name: 'Stardand List',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Masonry List',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Blog Split',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Standard Post',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Quote Post',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Link Post',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Audio Post',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Video Post',
                                url: '#',
                                title: false,
                            },
                        ]
                    },
                    {
                        name: 'Shop',
                        url: '#',
                        title: false,
                        dropDownMenu: [
                            {
                                name: 'Shop List',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Standard Product',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Grouped Product',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'External Product',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Variable Product',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Three Columns Grid',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Three Columns Wide',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Five Columns Grid',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Five Columns Wide',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'My Account',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Cart',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Checkout',
                                url: '#',
                                title: false,
                            },
                        ]
                    },
                    {
                        name: 'Forums',
                        url: '#',
                        title: false,
                        dropDownMenu: [
                            {
                                name: 'All Forums',
                                url: '#',
                                title: false,
                            },
                            {
                                name: 'Forum Topic',
                                url: '#',
                                title: false,
                            },
                        ]
                    },
                    {
                        name: 'Contact',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'FAQ',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Coming Soon',
                        url: '#',
                        title: false,
                    },
                    {
                        name: 'Error Page',
                        url: '#',
                        title: false,
                    },
                    
                ],
                submenu2: [],
                submenu3: [],
                submenu4: [],
            },
            {
                name:'Elements',
                submenu1: [
                    {
                        name: 'Course Shortcodes',
                        url: '#',
                        title: true,
                        img: '',
                    },
                    {
                        name: 'Course List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Course Slider',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Course Table',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Course Features',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Instructor List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Instructor Slider',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Education Timeline',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Advanced Course Search',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Linked Image List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    
                ],
                submenu2: [
                    {
                        name: 'Classic',
                        url: '#',
                        title: true,
                        img: '',
                    },
                    {
                        name: 'Accordions and Toggles',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Tabs',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Buttons',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Call to Action',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Contact Form',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Separators',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Icon With Text',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Blockquote',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Typography',
                        url: '#',
                        title: false,
                        img: '',
                    },
                ],
                submenu3: [
                    {
                        name: 'Infographic',
                        url: '#',
                        title: true,
                        img: '',
                    },
                    {
                        name: 'Counters',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Countdown',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Pie Chart',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Google Mpas',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Process',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Progress Bar',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Event List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Pricing Tables',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Comparison Pricing Tables',
                        url: '#',
                        title: false,
                        img: '',
                    },
                ],
                submenu4: [
                    {
                        name: 'Presentation',
                        url: '#',
                        title: true,
                        img: '',
                    },
                    {
                        name: 'Team Shortcode',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Testimonials',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Clients',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Blog List Shortcode',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Twitter List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Product List',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Image Gallery',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Masonry Gallery',
                        url: '#',
                        title: false,
                        img: '',
                    },
                    {
                        name: 'Video Button',
                        url: '#',
                        title: false,
                        img: '',
                    },
                ]
            }
        ],
    firstSection:[
        {
            title: 'Languages',
            img: '/images/h5-custom-icon-1.png',
        },
        {
            title: 'Software',
            img: '/images/h5-custom-icon-2.png',
        },
        {
            title: 'Business',
            img: '/images/h5-custom-icon-3.png',
        },
        {
            title: 'Chemistry',
            img: '/images/h5-custom-icon-4.png',
        },
        {
            title: 'Science',
            img: '/images/h5-custom-icon-5.png',
        },
        {
            title: 'DIY&Craft',
            img: '/images/h5-custom-icon-6.png',
        },
    ],
    thirdSection:[
        {
            img: '/images/testimonials-standard-6.png',
            name: 'Molly Simon',
            role: 'Teacher',
            description: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor.nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            id: 1,
        },
        {
            img: '/images/testimonials-standard-2.png',
            name: 'Joan Collins',
            role: 'Student',
            description: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor.nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            id: 2,
        },
        {
            img: '/images/testimonials-standard-1.png',
            name: 'Virginia Foster',
            role: 'Student',
            description: 'Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor.nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus',
            id: 3,
        },
    ],
    activeIndex2: 1,
    scrolled: false,
    section5Card: [
        {
            img: '/images/course-1-f-img.jpg',
            name: 'Preston Marshall',
            role: 'Business English',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Languages',
            price: '$20'
        },
        {
            img: '/images/course-2-f-img.jpg',
            name: 'David Sanders',
            role: 'Social Computing',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Programming',
            price: 'Free'
        },
        {
            img: '/images/course-3-f-img.jpg',
            name: 'Jennie King',
            role: 'Learn Spanish',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Languages',
            price: '$20'
        },
        {
            img: '/images/course-4-f-img.jpg',
            name: 'Edward Bowman',
            role: 'Basic Marketing',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Business',
            price: '$40'
        },
        {
            img: '/images/course-5-f-img.jpg',
            name: 'David Sanders',
            role: 'Android Developer',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Programming',
            price: 'Free'
        },
        {
            img: '/images/course-6-f-img.jpg',
            name: 'Jennifer Powell',
            role: 'Web Designing',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Programming',
            price: 'Free'
        },
        {
            img: '/images/course-12-f-img.jpg',
            name: 'Edward Bowman',
            role: 'Financial Modeling',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Business',
            price: '$20'
        },
        {
            img: '/images/course-11-f-img.jpg',
            name: 'Dave Robbins',
            role: 'Academic English',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Languages',
            price: 'Free'
        },
        {
            img: '/images/course-7-f-img.jpg',
            name: 'Kathryn Webb',
            role: 'Modern Psychology',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus dicta soluta, maiores earum voluptate recusandae dolore!',
            category: 'Business',
            price: '$40'
        },
    ],
    section6Card: [
        {
            img: '/images/h5-team-member-1.jpg',
            name: 'Brenda Harris',
            role: 'Teacher',
            description: 'Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa',
        },
        {
            img: '/images/h5-team-member-2.jpg',
            name: 'Lisa Griffin',
            role: 'Teacher',
            description: 'Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa',
        },
        {
            img: '/images/h5-team-member-3.jpg',
            name: 'Victor Green',
            role: 'Teacher',
            description: 'Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa',
        },
    ],
    sectionClient: [
        '/images/h5-client-1.png',
        '/images/h5-client-2.png',
        '/images/h5-client-3.png',
        '/images/h5-client-4.png',
        '/images/h5-client-5.png',
        '/images/h5-client-3.png',
        '/images/h5-client-2.png',
    ],
    footerTop1: [
        {
            title: 'logo',
            img: '/images/footer-logo-1.png',
            description: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
            telephone: '1-677-124-44227',
            time: 'Mon - Sat 8.00 - 18.00',
        }
    ],
    footerTop2: [
        {
            title: 'Popular Courses',
            submenu: [
                {
                    subtitle: 'Business English',
                    name: 'Preston Marshall',
                },
                {
                    subtitle: 'Social Computing',
                    name: 'David Sanders',
                },
                {
                    subtitle: 'Learn Spanish',
                    name: 'Jennie King',
                }
            ],
        },
    ],
    footerTop3: [
        {
            title: 'Support',
            submenu: [
                {
                    subtitle: 'User dashboard',
                },
                {
                    subtitle: 'Contact Us',
                },
                {
                    subtitle: 'FAQ',
                },
                {
                    subtitle: 'Course Offer',
                },
                {
                    subtitle: 'Events',
                }
            ],
        },
    ],
    footerTop4: [
        {
            title: 'Flexible Learning',
            img: '/images/footer-img-1.png',
        }
    ]  
})