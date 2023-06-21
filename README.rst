.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on pypi or github. It is a comment.



=====================
plone.sveltekit (WIP)
=====================

An integration package for SvelteKit frontend for Plone classic ui.

Features
--------

- provides a default_page plone.restapi service
- the repo contains a SvelteKit app and example resources one can use in combination with it
- The frontend4classicui can be used to create a static build or with nodejs as a dynamic lightweight frontend for Plone classic ui.

Status
------

Its working for content, supports top navigation and context navigation, as well as breadcrumbs, but is not feature complete in any way.


Installation
------------

Install plone.sveltekit by adding it to your buildout::

    [buildout]

    ...

    eggs =
        plone.sveltekit


and then running ``bin/buildout``


Authors
-------

- Maik Derstappen - Derico - md@derico.de


Contributors
------------

Put your name here, you deserve it!

- ?




License
-------

The project is licensed under the GPLv2.
