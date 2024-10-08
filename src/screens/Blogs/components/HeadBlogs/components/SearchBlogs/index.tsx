import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SearchBarCustom } from "~/core/components";
import { useAppDispatch, useDebounce } from "~/core/hooks";
import { BlogsActions } from "~/core/store";

const SearchBlogs: React.FC = memo(() => {
    const { t } = useTranslation("global");
    const [value, setValue] = useState("");
    const dispatch = useAppDispatch();

    const debouncedSearchTerm = useDebounce(value, 300);

    useEffect(() => {
        if (debouncedSearchTerm !== undefined) {
            dispatch(
                BlogsActions.update({
                    pagination: {
                        currentPage: 1,
                        totalPages: 1,
                    },
                    searchTerm: debouncedSearchTerm.toLowerCase().trim(),
                }),
            );
        }
    }, [debouncedSearchTerm, dispatch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return <SearchBarCustom placeholder={t("blogs.placeholder-search")} onChange={handleInputChange} value={value} />;
});

export default SearchBlogs;
