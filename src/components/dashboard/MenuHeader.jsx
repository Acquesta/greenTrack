function MenuHeader({ handleMenu }) {
    return (
        <div className="z-30 fixed top-0 lg:ml-[15vw] max-lg:w-[100vw] lg:static flex justify-between bg-[#141619] py-6 px-8">
            <div className="flex items-center gap-10 w-[25vw]">
                <div onClick={() => handleMenu()} className="lg:hidden flex flex-col gap-1 cursor-pointer">
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Pesquisar" className=" hidden xl:block w-[10vw] bg-[#202731] pl-3 py-2 text-xl font-light rounded-lg text-white" />
                    <svg className="xl:-ml-10 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.44967 9.44975C11.3827 7.51675 11.3827 4.38274 9.44967 2.44975C7.51667 0.516751 4.38266 0.516751 2.44967 2.44975C0.51667 4.38274 0.51667 7.51675 2.44967 9.44975C4.38266 11.3827 7.51667 11.3827 9.44967 9.44975ZM9.44967 9.44975L14.9497 14.9497" stroke="white" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-5">
                <svg className="cursor-pointer" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25041 0.382668C8.50094 0.688098 8.58646 1.14841 8.36096 1.56217C7.59014 2.97652 7.15207 4.59665 7.15207 6.32068C7.15207 11.8488 11.6604 16.325 17.2152 16.325C17.939 16.325 18.6442 16.2491 19.3234 16.1052C19.7879 16.0068 20.2103 16.2168 20.4368 16.5393C20.6704 16.8722 20.7194 17.3687 20.3938 17.7684C18.2921 20.3479 15.0766 22 11.4724 22C5.13346 22 0 16.8937 0 10.6013C0 5.86548 2.90695 1.80395 7.04487 0.0826208C7.52295 -0.116258 7.9919 0.0675031 8.25041 0.382668ZM6.67971 1.80213C3.54063 3.49564 1.40925 6.80088 1.40925 10.6013C1.40925 16.1294 5.91759 20.6056 11.4724 20.6056C14.2719 20.6056 16.8047 19.4697 18.63 17.6335C18.1662 17.6902 17.694 17.7194 17.2152 17.7194C10.8763 17.7194 5.74282 12.6131 5.74282 6.32068C5.74282 4.71645 6.07675 3.18825 6.67971 1.80213Z" fill="white" />
                </svg>
                <svg className="cursor-pointer" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6.53704C8.53524 6.53704 6.53712 8.53516 6.53712 11C6.53712 13.4648 8.53524 15.4629 11 15.4629C13.4649 15.4629 15.463 13.4648 15.463 11C15.463 8.53516 13.4649 6.53704 11 6.53704ZM7.91212 11C7.91212 9.29455 9.29463 7.91204 11 7.91204C12.7055 7.91204 14.088 9.29455 14.088 11C14.088 12.7054 12.7055 14.0879 11 14.0879C9.29463 14.0879 7.91212 12.7054 7.91212 11Z" fill="white" />
                    <path d="M13.4701 1.84714C12.7442 -0.615715 9.25577 -0.615713 8.52985 1.84714L8.4008 2.28497C8.18463 3.01839 7.34691 3.36538 6.67545 2.99963L6.27461 2.7813C4.01981 1.5531 1.5531 4.01981 2.7813 6.27462L2.99963 6.67545C3.36538 7.34692 3.01839 8.18463 2.28496 8.40081L1.84714 8.52985C-0.615715 9.25577 -0.615713 12.7442 1.84714 13.4701L2.28496 13.5992C3.01839 13.8154 3.36538 14.6531 2.99963 15.3246L2.7813 15.7254C1.5531 17.9802 4.0198 20.4469 6.27461 19.2187L6.67545 19.0004C7.34692 18.6346 8.18463 18.9816 8.4008 19.715L8.52985 20.1529C9.25577 22.6157 12.7442 22.6157 13.4701 20.1529L13.5992 19.715C13.8154 18.9816 14.6531 18.6346 15.3246 19.0004L15.7254 19.2187C17.9802 20.4469 20.4469 17.9802 19.2187 15.7254L19.0004 15.3246C18.6346 14.6531 18.9816 13.8154 19.715 13.5992L20.1529 13.4701C22.6157 12.7442 22.6157 9.25577 20.1529 8.52985L19.715 8.40081C18.9816 8.18463 18.6346 7.34691 19.0004 6.67545L19.2187 6.27461C20.4469 4.0198 17.9802 1.5531 15.7254 2.7813L15.3246 2.99963C14.6531 3.36538 13.8154 3.01839 13.5992 2.28497L13.4701 1.84714ZM9.84875 2.23589C10.1871 1.08804 11.8129 1.08804 12.1512 2.23588L12.2803 2.67371C12.7441 4.24737 14.5415 4.99189 15.9823 4.20712L16.3831 3.98879C17.434 3.41637 18.5836 4.56601 18.0112 5.61689L17.7929 6.01773C17.0081 7.45845 17.7526 9.25588 19.3263 9.71971L19.7641 9.84875C20.912 10.1871 20.912 11.8129 19.7641 12.1512L19.3263 12.2803C17.7526 12.7441 17.0081 14.5416 17.7929 15.9823L18.0112 16.3831C18.5836 17.434 17.434 18.5836 16.3831 18.0112L15.9823 17.7929C14.5416 17.0081 12.7441 17.7526 12.2803 19.3263L12.1512 19.7641C11.8129 20.912 10.1871 20.912 9.84875 19.7641L9.71971 19.3263C9.25588 17.7526 7.45845 17.0081 6.01772 17.7929L5.61689 18.0112C4.56601 18.5836 3.41637 17.434 3.98879 16.3831L4.20712 15.9823C4.99189 14.5416 4.24737 12.7441 2.67371 12.2803L2.23589 12.1512C1.08804 11.8129 1.08804 10.1871 2.23588 9.84875L2.67371 9.71971C4.24737 9.25588 4.99189 7.45845 4.20712 6.01773L3.98879 5.61689C3.41637 4.56601 4.56601 3.41637 5.61689 3.98878L6.01772 4.20712C7.45845 4.99189 9.25587 4.24737 9.71971 2.67371L9.84875 2.23589Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}

export default MenuHeader;