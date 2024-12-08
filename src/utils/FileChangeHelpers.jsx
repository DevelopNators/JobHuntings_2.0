export const handleSingleFileChange = (e,setValue,valueName,callback=null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setValue(valueName,loadEvent.target.result);
        if (callback) {
          callback();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  