# BagBuddy

A packing-list app: people plan Trips and track, per item, how much they want, own, have prepared and have packed.

## Language

**Trip**:
A journey being packed for. The top-level concept; owns the packing progress for the Lists assigned to it.
_Avoid_: Journey, vacation, packing session

**List**:
A reusable, account-owned set of List items with wanted quantities, groupable by Category and assignable to many Trips.
_Avoid_: Packing list, checklist

**Template**:
A set of items and Categories with no quantities, used as a starting point for a List or shared with others.
_Avoid_: Preset, blueprint

**Source template**:
The Template a List was created from, remembered for reference only; the List's contents never sync with it.
_Avoid_: Parent template, linked template

**List item**:
One line in a List or Template: a Catalog item or Custom item, in one Category, with a wanted quantity (Lists only).
_Avoid_: Entry, thing

**Trip list**:
The assignment of a List to a Trip; it owns that Trip's progress for the List's items.
_Avoid_: Attached list, linked list

## Quantities

**Wanted**:
How many units of an item the user wants to take. A target, not a ceiling.
_Avoid_: Needed, required

**Owned**:
How many units the user already has (does not need to buy).
_Avoid_: Bought, have

**Prepared**:
Owned units set aside or made ready for the Trip.
_Avoid_: Ready, staged

**Packed**:
Prepared units that are in the bag. Never exceeds prepared.
_Avoid_: Done, checked

**To buy**:
Derived: wanted minus owned, never below zero.
_Avoid_: Missing, shortfall

**Surplus**:
Units prepared beyond wanted; shown as a warning, never blocked.
_Avoid_: Overflow, extra

## Categories and Catalog

**Catalog**:
The author-curated, read-only set of Catalog items and Catalog categories identified by stable keys and named through translations.
_Avoid_: Library, defaults

**Catalog item**:
A suggested item in the Catalog (for example Toothbrush), belonging to one Catalog category.
_Avoid_: Preset item

**Category**:
The group an item is shown under; either a Catalog category or a Custom category.
_Avoid_: Section, tag

**Custom item**:
An item the user typed that is not in the Catalog; it exists only as a name on its own List item or Template item.
_Avoid_: User item, free-text item

**Custom category**:
A Category created by a user, owned by that user only.
_Avoid_: Personal category

## People and sharing

**Guest**:
A user without credentials who can use the app and later upgrade to an Account without losing data.
_Avoid_: Anonymous user, visitor

**Account**:
A user with credentials; the owner of Trips, Lists, Templates and Custom categories.
_Avoid_: Profile, login

**Share link**:
An unguessable link to an immutable snapshot of a List or Template that anyone can copy into their own account; revocable by its creator.
_Avoid_: Invite, public list
