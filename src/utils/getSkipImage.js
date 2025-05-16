const getSkipImageUrl = (size) => {
    const sizeInt = parseInt(size, 10);
  
    if (sizeInt === 4) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
    }
  
    if ([5, 6, 8, 10, 12, 14].includes(sizeInt)) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg';
    }
  
    if (sizeInt === 16) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg';
    }
  
    if (sizeInt === 20) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg';
    }
  
    if (sizeInt === 40) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg';
    }
  
    return '';
  };
  
  export default getSkipImageUrl;
  