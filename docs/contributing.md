# Contributing to the Fabric Wiki

When contributing to the Fabric Wiki, you should fork and create a PR.

Some generic rules that apply to all pages of the wiki:

- Do not edit documentation in the `/version...` folders, these are read-only and are snapshots of previous versions of the wiki.
- Please use grammatically correct English when editing, a translation system will be implemented at a later date and we will then accept other languages.
- Images are to be placed in a suitable location in the `/static/img` folder.

Some rules that really only apply to the documentation and tutorial section of the wiki:

- Yarn mappings must be used for code examples, any reference to alternative mappings will not be accepted.
    + An exception to this rule exists for pages related to Fabric Loom.
- Unless writing a documentation page or tutorial on Mixins, please try and use libraries or non-mixin alternatives wherever possible. If the mixin is useful enough, it should be added to Fabric API or packaged as a library.
- When creating a tutorial, you may use libraries as long as you can guarantee their persistence<sup>1</sup>.

## Adding Your Library
On the old Fabric Wiki, you could add your library to `tutorial:libraries` - you can now add your library to the `/docs/libraries` page

When adding your library, please make sure it is in alphabetical order and in the correct category.

## Directory Structure

- `/docs/` - Documentation
- `/player/` - Player Guides
- `/tutorials/` - Tutorials

## Wiki Agenda

Please see GitHub projects for a Fabric Wiki roadmap, and goals we have in place.

## Useful Links

- [The Documentation System: *The Grand Unified Theory of Documentation*](https://documentation.divio.com/)

## References And Notes

- **[1]** The library wont be wiped off the internet, it must be permament, either on maven central or on a maven repository that is trusted.