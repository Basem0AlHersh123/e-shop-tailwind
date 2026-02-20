import React,{createContext,useContext,useState,useEffect} from "react";
console.log("!!! LANGUAGE CONTEXT FILE IS RUNNING !!!");
const LanguageContext=createContext();
export const LanguageProvider=({children})=>{
    const [language,setLanguage]=useState('en');
    // const savedLang=localStorage.getItem("language")||'en';
    const [isRTL,setIsRTL]=useState(false);
    const translations = {
        en: {
            home: 'Home',
            products: 'Products',
            categories: 'Categories',
            about: 'About',
            contact: 'Contact',
            search: 'Search products...',
            cart: 'Cart',
            login: 'Login',
            profile: 'Profile',
            orders: 'Orders',
            wishlist: 'Wishlist',
            logout: 'Logout',
            notifications: 'Notifications',
            electronics: 'Electronics',
            fashion: 'Fashion',
            homeDecor: 'Home Decor',
            beauty: 'Beauty',
            sports: 'Sports'
        },
        ar: {
            home: 'الرئيسية',
            products: 'المنتجات',
            categories: 'الفئات',
            about: 'من نحن',
            contact: 'اتصل بنا',
            search: 'ابحث عن منتجات...',
            cart: 'عربة التسوق',
            login: 'تسجيل الدخول',
            profile: 'الملف الشخصي',
            orders: 'الطلبات',
            wishlist: 'المفضلة',
            logout: 'تسجيل الخروج',
            notifications: 'الإشعارات',
            electronics: 'إلكترونيات',
            fashion: 'موضة',
            homeDecor: 'ديكور منزلي',
            beauty: 'جمال',
            sports: 'رياضة'
        }
    };

    const changeLanguage=(lang)=>{
        setLanguage(lang);
        setIsRTL(lang==='ar');
        localStorage.setItem('language',lang);
        document.documentElement.dir=lang==='ar'?'rtl':'ltr';
        document.documentElement.lang=lang;
    };
    useEffect(()=>{
        // if(savedLang&&savedLang!==language){
        //     setLanguage(savedLang);
        //     setIsRTL(savedLang==='ar');
        // }
        document.documentElement.dir=isRTL?'rtl':'ltr';
        document.documentElement.lang=language;
    },[language,isRTL]);
    const value={
        language,
        isRTL,
        changeLanguage,
        t:translations[language]
    }
    return (
        //I do not remeber that we added Provider inside Themecontext
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage= ()=>{
    const context=useContext(LanguageContext);
    if(!context){
            throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context;
};
// export {LanguageContext};
// useContext(LanguageContext);