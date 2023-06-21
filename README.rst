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
For now only public content is supported.


Installation
------------

Install plone.sveltekit by adding it to your buildout::

    [buildout]

    ...

    eggs =
        plone.sveltekit


and then running ``bin/buildout``

Frontend
--------

.. code-block:: shell

    cd resources/frontend4classicui/

create a ``.env`` file with the following content::

    PUBLIC_FRONTEND_BASE_URL=http://localhost:5173
    PUBLIC_PLONE_BASE_URL=http://127.0.0.1:8080/Plone

to install dependencies and star the dev server, run:

.. code-block:: shell

    cd resources/frontend4classicui/
    npm install
    npm run dev

to build a static build of the Plone website:

.. code-block:: shell

    npm run build

This will create a static build of all public Plone content in the ``build`` folder.


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
