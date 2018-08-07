FROM jupyter/all-spark-notebook:177037d09156

RUN pip install --no-cache-dir vdom==0.5

USER jovyan

RUN mkdir /home/jovyan/util && chmod -r +rwx /home/jovyan/util

COPY util/ /home/jovyan/util/

RUN cd util/theme-superhero-datascience && npm install && npm run build \
 && jupyter labextension install

