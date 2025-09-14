'use client';

import { useMemo, useState } from 'react';
import { ChevronsUpDown, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import '@/css/multi-select.scss';

export type MultiSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export type MultiSelectProps = {
    options: MultiSelectOption[];
    value: string[];
    onChange: (next: string[]) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    maxBadges?: number;
    selectAll?: boolean;
    name?: string;
    icon?: React.ReactElement;
};

export function MultiSelect({
    options,
    value,
    onChange,
    placeholder,
    className,
    disabled,
    searchable = false,
    searchPlaceholder,
    emptyMessage,
    maxBadges = 2,
    selectAll = false,
    name,
    icon,
}: MultiSelectProps) {
    const t = useTranslations('Features');
    const [open, setOpen] = useState(false);

    const byValue = useMemo(
        () => new Map(options.map((o) => [o.value, o])),
        [options]
    );
    const enabledValues = useMemo(
        () => options.filter((o) => !o.disabled).map((o) => o.value),
        [options]
    );

    const allSelected =
        value.length > 0 && value.length === enabledValues.length;

    function toggle(v: string) {
        const exists = value.includes(v);
        const next = exists ? value.filter((x) => x !== v) : [...value, v];
        onChange(next);
    }

    function selectAllOrClear() {
        if (allSelected) onChange([]);
        else onChange(enabledValues);
    }

    function remove(v: string, e?: React.MouseEvent) {
        e?.stopPropagation();
        onChange(value.filter((x) => x !== v));
    }

    return (
        <div className={`multi-select ${className ?? ''}`}>
            {name ? (
                <input type="hidden" name={name} value={value.join(',')} />
            ) : null}

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        disabled={disabled}
                        className="multi-select__trigger"
                    >
                        {icon ? (
                            icon
                        ) : (
                            <ChevronsUpDown className="multi-select__chevron" />
                        )}
                        <span className="multi-select__placeholder">
                            {placeholder || t('choose')}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="multi-select__content" align="start">
                    <Command loop>
                        {searchable && (
                            <CommandInput
                                placeholder={searchPlaceholder || t('search')}
                                className="multi-select__search"
                            />
                        )}
                        <CommandList>
                            <CommandEmpty>
                                {emptyMessage || t('noResults')}
                            </CommandEmpty>
                            {selectAll && (
                                <CommandGroup heading="Actions">
                                    <CommandItem onSelect={selectAllOrClear}>
                                        <Checkbox
                                            className="multi-select__checkbox"
                                            checked={allSelected}
                                            aria-label={
                                                allSelected
                                                    ? t('clear')
                                                    : t('selectAll')
                                            }
                                        />
                                        {allSelected
                                            ? t('clear')
                                            : t('selectAll')}
                                    </CommandItem>
                                </CommandGroup>
                            )}
                            <CommandGroup>
                                {options.map((opt) => {
                                    const checked = value.includes(opt.value);
                                    return (
                                        <CommandItem
                                            key={opt.value}
                                            disabled={opt.disabled}
                                            onSelect={() => {
                                                if (opt.disabled) return;
                                                toggle(opt.value);
                                            }}
                                        >
                                            <Checkbox
                                                className="multi-select__checkbox"
                                                checked={checked}
                                            />
                                            <span
                                                className={
                                                    opt.disabled
                                                        ? 'multi-select__option-disabled'
                                                        : 'multi-select__option'
                                                }
                                            >
                                                {opt.label}
                                            </span>
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {value.length > 0 && (
                <div className="multi-select__values">
                    <>
                        {value.slice(0, maxBadges).map((v) => (
                            <Badge
                                key={v}
                                variant="secondary"
                                className="multi-select__badge"
                            >
                                <span className="multi-select__badge-label">
                                    {byValue.get(v)?.label ?? v}
                                </span>
                                <span
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Remove ${
                                        byValue.get(v)?.label ?? v
                                    }`}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onClick={(e) => remove(v, e)}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'Enter' ||
                                            e.key === ' '
                                        ) {
                                            e.preventDefault();
                                            remove(v);
                                        }
                                    }}
                                    className="multi-select__remove"
                                >
                                    <X className="multi-select__remove-icon" />
                                </span>
                            </Badge>
                        ))}
                        {value.length > maxBadges && (
                            <Badge
                                variant="outline"
                                className="multi-select__more"
                            >
                                +{value.length - maxBadges} {t('more')}
                            </Badge>
                        )}
                    </>
                </div>
            )}
        </div>
    );
}
export default MultiSelect;
